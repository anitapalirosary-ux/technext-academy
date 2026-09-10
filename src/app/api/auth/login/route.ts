import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // 1. Validation
    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ error: 'Password is required.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    // 2. Fetch user from tbl_LoginUser
    const { data: user, error: queryError } = await supabaseAdmin
      .from('tbl_LoginUser')
      .select('id, full_name, email, country_code, phone_number, password_hash, role, is_active')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (queryError) {
      console.error('Supabase query error in login:', queryError);
      return NextResponse.json(
        { error: 'Database error occurred while fetching user.' },
        { status: 500 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email address. Please sign up first.' },
        { status: 404 }
      );
    }

    if (!user.is_active) {
      return NextResponse.json(
        { error: 'This account has been deactivated. Please contact support.' },
        { status: 403 }
      );
    }

    // 3. Compare password hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid password. Please check your credentials and try again.' },
        { status: 401 }
      );
    }

    // 4. Update updated_at timestamp in background
    await supabaseAdmin
      .from('tbl_LoginUser')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', user.id);

    return NextResponse.json(
      {
        message: 'Login successful.',
        user: {
          id: user.id,
          name: user.full_name,
          email: user.email,
          phone: `${user.country_code || '+91'} ${user.phone_number || ''}`.trim(),
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Unexpected error in login route:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
