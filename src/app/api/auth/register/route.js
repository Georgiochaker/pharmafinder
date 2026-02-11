

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { User } from '../../../../models';
import connectDB from '../../../../db';

export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, password, role } = body;
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password_hash: hash, role });
    return NextResponse.json({ id: user._id, name: user.name, email: user.email, role: user.role }, { status: 201 });
  } catch (err) {
    console.error('Registration error:', err);
    console.error('Error details:', err.message);
    console.error('Error stack:', err.stack);
    return NextResponse.json({ error: 'Registration failed', details: err.message }, { status: 500 });
  }
}
