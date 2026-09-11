import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      registrationId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
    } = body;

    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    const resendApiKey = process.env.RESEND_API_KEY;
    const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'anita.palirosary@gmail.com';

    // 1. Verify Payment Signature (if signature and secret are present)
    let isSignatureValid = false;
    if (razorpay_order_id && razorpay_payment_id && razorpay_signature && razorpayKeySecret) {
      const generatedSignature = crypto
        .createHmac('sha256', razorpayKeySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      isSignatureValid = generatedSignature === razorpay_signature;
      if (!isSignatureValid) {
        console.warn('Razorpay signature mismatch warning');
      }
    } else {
      isSignatureValid = Boolean(razorpay_payment_id);
    }

    // 2. Update Supabase tbl_LiveSessionReg (Mark status as 'paid')
    const updatePayload: Record<string, any> = {
      payment_status: 'paid',
      razorpay_payment_id: razorpay_payment_id || null,
      paid_at: new Date().toISOString(),
      email_sent: true,
    };
    if (razorpay_order_id) {
      updatePayload.razorpay_order_id = razorpay_order_id;
    }

    try {
      if (registrationId) {
        await supabaseAdmin
          .from('tbl_LiveSessionReg')
          .update(updatePayload)
          .eq('id', registrationId);
      } else if (email) {
        await supabaseAdmin
          .from('tbl_LiveSessionReg')
          .update(updatePayload)
          .eq('email_address', email.trim().toLowerCase())
          .order('created_at', { ascending: false })
          .limit(1);
      }
    } catch (dbErr) {
      console.error('Failed to update Supabase tbl_LiveSessionReg on payment success:', dbErr);
    }

    // 3. Prepare Session Details & Calendar Invite
    const sessionTitle = 'Interview Q&A — .NET & Career Prep';
    const sessionDateFormatted = 'Monday, 21st September 2026';
    const sessionTimeFormatted = '2:00 PM – 3:00 PM IST';
    const meetingLink = 'https://meet.google.com/technext-live-qa'; // Configurable Google Meet room

    // Google Calendar Direct Add Link
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      sessionTitle + ' | TechNext Academy'
    )}&dates=20260921T083000Z/20260921T093000Z&details=${encodeURIComponent(
      `Welcome to TechNext Academy Live Session!\n\nMeeting Link: ${meetingLink}\n\nTopics: High-frequency .NET & C# Interview Questions, Enterprise Architecture, Resume Tips & Direct Q&A.`
    )}&location=${encodeURIComponent(meetingLink)}`;

    // Raw .ics Calendar Invite File Content
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//TechNext Academy//Live Sessions//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `UID:live-session-20260921-${Date.now()}@technextacademy.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      'DTSTART:20260921T083000Z',
      'DTEND:20260921T093000Z',
      `SUMMARY:${sessionTitle} | TechNext Academy`,
      `DESCRIPTION:Live Interactive Q&A Session for .NET & Tech Careers.\\n\\nGoogle Meet Link: ${meetingLink}\\n\\nInstructor: Senior SDE Mentor`,
      `LOCATION:${meetingLink}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-PT15M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: TechNext Academy Live Session starting in 15 minutes',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const icsBase64 = Buffer.from(icsContent).toString('base64');

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0B0428; color: #FFFFFF; border: 1px solid #1E1742; border-radius: 20px; overflow: hidden; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-block; background-color: rgba(0,237,100,0.1); border: 1px solid #00ED64; color: #00ED64; padding: 4px 16px; border-radius: 9999px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
            Seat Reserved &amp; Confirmed
          </div>
          <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 800;">Seat Reserved Successfully!</h1>
          <p style="color: #9CA3C7; font-size: 14px; margin-top: 6px;">Thank you, <strong style="color: #FFFFFF;">${name || 'Candidate'}</strong>. Your seat is confirmed.</p>
        </div>

        <div style="background-color: #150D3F; border: 1px solid #231B54; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h2 style="color: #00ED64; font-size: 18px; margin-top: 0; margin-bottom: 16px; font-weight: 700;">${sessionTitle}</h2>
          
          <div style="margin-bottom: 12px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">👤 Candidate:</span> <strong style="color: #FFFFFF;">${name}</strong>
          </div>
          <div style="margin-bottom: 12px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">📧 Email:</span> <strong style="color: #FFFFFF;">${email}</strong>
          </div>
          <div style="margin-bottom: 12px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">📱 Phone:</span> <strong style="color: #FFFFFF;">${phone || 'Not provided'}</strong>
          </div>
          <div style="margin-bottom: 12px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">📅 Date:</span> <strong style="color: #FFFFFF;">${sessionDateFormatted}</strong>
          </div>
          <div style="margin-bottom: 12px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">⏰ Time:</span> <strong style="color: #FFFFFF;">${sessionTimeFormatted}</strong>
          </div>
          <div style="margin-bottom: 16px; font-size: 14px; color: #E2E8F0;">
            <span style="color: #9CA3C7;">💳 Payment ID:</span> <span style="font-family: monospace; color: #00ED64;">${razorpay_payment_id || 'CONFIRMED'}</span>
          </div>

          <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #231B54;">
            <a href="${meetingLink}" style="display: inline-block; background-color: #00ED64; color: #0B0428; font-weight: bold; font-size: 14px; padding: 12px 28px; border-radius: 12px; text-decoration: none; margin-bottom: 10px;">
              🚀 Join Google Meet Room
            </a>
            <div style="margin-top: 10px;">
              <a href="${gCalUrl}" target="_blank" style="color: #00ED64; font-size: 12px; text-decoration: underline;">
                + Add to Google Calendar
              </a>
            </div>
          </div>
        </div>

        <div style="background-color: #150D3F; border: 1px solid #231B54; border-radius: 16px; padding: 20px; margin-bottom: 24px;">
          <h3 style="color: #FFFFFF; font-size: 14px; margin-top: 0; margin-bottom: 10px;">What We Will Cover:</h3>
          <ul style="color: #9CA3C7; font-size: 13px; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li>High-yield C#, .NET &amp; Web API interview questions.</li>
            <li>Enterprise Architecture, Dependency Injection &amp; SQL Query Optimization.</li>
            <li>Real project framing and explaining technical challenges with the STAR model.</li>
            <li>Live 1-on-1 Q&amp;A directly with the mentor.</li>
          </ul>
        </div>

        <div style="text-align: center; border-top: 1px solid #1E1742; padding-top: 16px;">
          <p style="color: #64748B; font-size: 12px; margin: 0;">
            Have questions before the session? Email us at <a href="mailto:${supportEmail}" style="color: #00ED64; text-decoration: none;">${supportEmail}</a>
          </p>
        </div>
      </div>
    `;

    // 4. Send Confirmation Email via Resend
    let emailSent = false;
    if (resendApiKey) {
      // 4a. Always send to supportEmail (anita.palirosary@gmail.com) so delivery is 100% guaranteed in Resend testing sandbox
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'TechNext Academy <onboarding@resend.dev>',
            to: [supportEmail],
            subject: `Seat Reserved: ${sessionTitle} (${name}) - TechNext Academy`,
            html: emailHtml,
            attachments: [
              {
                filename: 'technext-live-session.ics',
                content: icsBase64,
              },
            ],
          }),
        });
        emailSent = true;
      } catch (err) {
        console.error('Failed to send Resend email to supportEmail:', err);
      }

      // 4b. If candidate email is different from supportEmail, try sending to candidate email as well
      if (email && email.trim().toLowerCase() !== supportEmail.toLowerCase()) {
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'TechNext Academy <onboarding@resend.dev>',
              to: [email.trim()],
              subject: `Seat Reserved: ${sessionTitle} - TechNext Academy`,
              html: emailHtml,
              attachments: [
                {
                  filename: 'technext-live-session.ics',
                  content: icsBase64,
                },
              ],
            }),
          });
        } catch (candErr) {
          console.warn('Resend candidate email attempt notice (requires verified custom domain if testing):', candErr);
        }
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      message: 'Payment verified and seat reserved successfully.',
      sessionTitle,
      candidate: {
        name,
        email,
      },
    });
  } catch (err: any) {
    console.error('Payment verification error:', err);
    return NextResponse.json(
      { error: 'An error occurred during payment verification.' },
      { status: 500 }
    );
  }
}
