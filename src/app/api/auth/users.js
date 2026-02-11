const mongoose = require('mongoose');
const { User } = require('../../models');
const { requireRole } = require('../../middleware/requireRole');

export default async function handler(req, res) {
  // Only admin can list all users
  await requireRole('admin')(req, res, () => {});
  if (res.headersSent) return;
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const users = await User.find({}, '-password_hash');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
