import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, countryCode, phone, password } = body;

    // 1. Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Full Name is required.' }, { status: 400 });
    }
    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }
    if (!password || password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone.replace(/\D/g, '');
    const cleanCountryCode = (countryCode || '+91').trim();

    // 2. Check if user already exists in tbl_LoginUser
    const { data: existingUser, error: queryError } = await supabaseAdmin
      .from('tbl_LoginUser')
      .select('id, email')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (queryError && queryError.code !== 'PGRST116') {
      console.error('Supabase query error:', queryError);
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email address already exists. Please log in.' },
        { status: 409 }
      );
    }

    // 3. Hash the password securely
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 4. Insert into tbl_LoginUser
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('tbl_LoginUser')
      .insert([
        {
          full_name: name.trim(),
          email: cleanEmail,
          country_code: cleanCountryCode,
          phone_number: cleanPhone,
          password_hash: passwordHash,
          role: 'student',
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select('id, full_name, email, country_code, phone_number, role, created_at')
      .single();

    if (insertError) {
      console.error('Supabase insert error in tbl_LoginUser:', insertError);
      return NextResponse.json(
        { error: `Database error: ${insertError.message || 'Unable to register user.'}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Account created successfully.',
        user: {
          id: newUser.id,
          name: newUser.full_name,
          email: newUser.email,
          phone: `${newUser.country_code} ${newUser.phone_number}`,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Unexpected error in signup route:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
