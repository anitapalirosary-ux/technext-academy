import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'anita.palirosary@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. Save message into Supabase tbl_SendMessage table
    let dbSaved = false;
    let dbError = null;

    try {
      const { data, error } = await supabaseAdmin
        .from('tbl_SendMessage')
        .insert([
          {
            full_name: name.trim(),
            email_address: email.trim().toLowerCase(),
            phone_number: phone ? phone.trim() : null,
            message: message.trim(),
            created_at: new Date().toISOString(),
            status: 'new',
          },
        ])
        .select();

      if (error) {
        console.error('Supabase tbl_SendMessage error:', error);
        dbError = error.message;
      } else {
        dbSaved = true;
      }
    } catch (e: any) {
      console.error('Supabase exception:', e);
      dbError = e?.message || 'Database error';
    }

    // 2. Send email notification via Resend REST API
    let emailSent = false;
    let emailError = null;

    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0B0428; color: #FFFFFF; border: 1px solid #1E1742; border-radius: 16px; overflow: hidden; padding: 32px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #00ED64; font-size: 24px; margin: 0; font-weight: 800;">TechNext Academy</h1>
              <p style="color: #9CA3C7; font-size: 13px; margin-top: 4px;">New Contact Form Message Received</p>
            </div>

            <div style="background-color: #150D3F; border: 1px solid #231B54; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #FFFFFF; font-size: 16px; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #231B54; padding-bottom: 8px;">Sender Details</h3>
              
              <p style="margin: 8px 0; font-size: 14px; color: #E2E8F0;">
                <strong style="color: #9CA3C7; display: inline-block; width: 120px;">Full Name:</strong> 
                <span style="color: #FFFFFF; font-weight: 600;">${name}</span>
              </p>
              
              <p style="margin: 8px 0; font-size: 14px; color: #E2E8F0;">
                <strong style="color: #9CA3C7; display: inline-block; width: 120px;">Email:</strong> 
                <a href="mailto:${email}" style="color: #00ED64; text-decoration: none;">${email}</a>
              </p>
              
              <p style="margin: 8px 0; font-size: 14px; color: #E2E8F0;">
                <strong style="color: #9CA3C7; display: inline-block; width: 120px;">Phone:</strong> 
                <span style="color: #FFFFFF;">${phone || 'Not provided'}</span>
              </p>

              <p style="margin: 8px 0; font-size: 14px; color: #E2E8F0;">
                <strong style="color: #9CA3C7; display: inline-block; width: 120px;">Date & Time:</strong> 
                <span style="color: #9CA3C7; font-size: 12px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
              </p>
            </div>

            <div style="background-color: #150D3F; border: 1px solid #231B54; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <h3 style="color: #FFFFFF; font-size: 16px; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #231B54; padding-bottom: 8px;">Inquiry Message</h3>
              <p style="color: #F8FAFC; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>

            <div style="text-align: center; border-top: 1px solid #1E1742; padding-top: 16px;">
              <p style="color: #64748B; font-size: 11px; margin: 0;">
                This message was submitted via the contact page on <a href="https://technext-academy.vercel.app/contact" style="color: #00ED64; text-decoration: none;">technext-academy.vercel.app</a>
              </p>
            </div>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'TechNext Academy <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email.trim(),
            subject: `New Inquiry from ${name} - TechNext Academy`,
            html: emailHtml,
          }),
        });

        const resendData = await resendRes.json();
        if (resendRes.ok) {
          emailSent = true;
        } else {
          console.error('Resend API Error:', resendData);
          emailError = resendData?.message || 'Resend delivery failed';
        }
      } catch (err: any) {
        console.error('Resend Exception:', err);
        emailError = err?.message || 'Email delivery exception';
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message processed successfully.',
      dbSaved,
      emailSent,
      recipient: recipientEmail,
      errors: {
        dbError,
        emailError,
      },
    });
  } catch (err: any) {
    console.error('API Contact route handler error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}
