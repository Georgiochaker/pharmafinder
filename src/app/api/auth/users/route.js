
import { NextResponse } from 'next/server';
import { User } from '../../../../models';
import connectDB from '../../../../db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function GET(request) {
  try {
    await connectDB();
    
    // Check for Authorization header
    const auth = request.headers.get('authorization');
    if (!auth) {
      return NextResponse.json({ error: 'Missing Authorization header' }, { status: 401 });
    }
    const [type, token] = auth.split(' ');
    if (type !== 'Bearer' || !token) {
      return NextResponse.json({ error: 'Missing or invalid token' }, { status: 401 });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: insufficient role' }, { status: 403 });
    }
    const users = await User.find({}, '-password_hash');
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error('Users error:', err);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
