// Role-based access control middleware for PharmaFinder
const jwt = require('jsonwebtoken');

// Usage: requireRole('admin') or requireRole(['admin', 'pharmacy'])
function requireRole(role) {
  return function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Missing Authorization header' });
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Missing token' });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (Array.isArray(role)) {
        if (!role.includes(decoded.role)) {
          return res.status(403).json({ error: 'Forbidden: insufficient role' });
        }
      } else {
        if (decoded.role !== role) {
          return res.status(403).json({ error: 'Forbidden: insufficient role' });
        }
      }
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

module.exports = { requireRole };