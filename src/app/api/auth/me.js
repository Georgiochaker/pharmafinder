const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

function getToken(req) {
  const auth = req.headers.authorization;
  if (!auth) return null;
  const [type, token] = auth.split(' ');
  if (type !== 'Bearer') return null;
  return token;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const token = getToken(req);
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ id: user._id, name: user.name, email: user.email, role: user.role });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
