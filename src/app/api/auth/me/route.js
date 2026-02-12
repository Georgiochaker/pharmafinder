
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { User } from '../../../../models';
import connectDB from '../../../../db';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

function getToken(request) {
  const auth = request.headers.get('authorization');
  if (!auth) return null;
  const [type, token] = auth.split(' ');
  if (type !== 'Bearer') return null;
  return token;
}

export async function GET(request) {
  const token = getToken(request);
  if (!token) {
    return NextResponse.json({ error: 'No token' }, { status: 401 });
  }
  try {
    await connectDB();
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ id: user._id, name: user.name, email: user.email, role: user.role }, { status: 200 });
  } catch (err) {
    console.error('Me error:', err);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
