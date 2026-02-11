const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) return res.status(400).json({ error: 'Missing fields' });
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already exists' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password_hash: hash, role });
    res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
}
