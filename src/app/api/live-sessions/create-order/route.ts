import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const sessionName = 'Interview Q&A — .NET & Career Prep';
    const amountInRupees = parseInt(process.env.NEXT_PUBLIC_LIVE_SESSION_FEE || '99', 10);
    const amountInPaise = amountInRupees * 100;

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    // 1. Create Razorpay Order via REST API
    let razorpayOrderId = null;

    if (razorpayKeyId && razorpayKeySecret) {
      try {
        const authHeader = 'Basic ' + Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64');
        const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: 'INR',
            receipt: `rcpt_${Date.now().toString().slice(-8)}`,
            notes: {
              session_name: sessionName,
              candidate_name: name.trim(),
              candidate_email: email.trim(),
              candidate_phone: phone.trim(),
            },
          }),
        });

        const orderData = await orderRes.json();
        if (orderRes.ok && orderData.id) {
          razorpayOrderId = orderData.id;
        } else {
          console.error('Razorpay Order Error:', orderData);
        }
      } catch (err) {
        console.error('Razorpay exception:', err);
      }
    }

    // 2. Save Registration Record in Supabase tbl_LiveSessionReg
    let registrationId = null;
    try {
      const { data, error } = await supabaseAdmin
        .from('tbl_LiveSessionReg')
        .insert([
          {
            session_name: sessionName,
            full_name: name.trim(),
            email_address: email.trim().toLowerCase(),
            phone_number: phone.trim(),
            amount: amountInRupees,
            payment_status: 'pending',
            razorpay_order_id: razorpayOrderId,
            created_at: new Date().toISOString(),
          },
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Supabase tbl_LiveSessionReg insert error:', error);
      } else if (data) {
        registrationId = data.id;
      }
    } catch (e: any) {
      console.error('Supabase tbl_LiveSessionReg exception:', e);
    }

    return NextResponse.json({
      success: true,
      registrationId,
      orderId: razorpayOrderId,
      amount: amountInPaise,
      amountInRupees,
      currency: 'INR',
      keyId: razorpayKeyId,
      sessionName,
    });
  } catch (err: any) {
    console.error('Error creating live session order:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing registration.' },
      { status: 500 }
    );
  }
}
