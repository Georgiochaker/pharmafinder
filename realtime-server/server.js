import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { connectRedisOptional, redis } from "./redisClient.js";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// ---- Socket events ----
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Join rooms: pharmacy, med, user
  socket.on("room:join", ({ pharmacyId, medicationId, userId }) => {
    if (pharmacyId) socket.join(`pharmacy:${pharmacyId}`);
    if (medicationId) socket.join(`med:${medicationId}`);
    if (userId) socket.join(`user:${userId}`);
    socket.emit("room:joined", { ok: true, pharmacyId, medicationId, userId });
  });

  socket.on("room:leave", ({ pharmacyId, medicationId, userId }) => {
    if (pharmacyId) socket.leave(`pharmacy:${pharmacyId}`);
    if (medicationId) socket.leave(`med:${medicationId}`);
    if (userId) socket.leave(`user:${userId}`);
    socket.emit("room:left", { ok: true, pharmacyId, medicationId, userId });
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// ---- Health ----
app.get("/health", (req, res) => res.json({ ok: true }));

// ---- Emit stock update (test) ----
app.post("/emit/stock-update", async (req, res) => {
  const { pharmacyId, medicationId, qty, status } = req.body;

  const payload = {
    pharmacyId,
    medicationId,
    qty,
    status,
    updatedAt: new Date().toISOString(),
  };

  if (pharmacyId) io.to(`pharmacy:${pharmacyId}`).emit("stock:update", payload);
  if (medicationId) io.to(`med:${medicationId}`).emit("stock:update", payload);

  // Optional cache invalidation later (only if Redis running)
  try {
    if (redis.isOpen) {
      const keys = await redis.keys("cache:medsearch:*");
      if (keys.length) await redis.del(keys);
    }
  } catch {}

  return res.json({ ok: true, emitted: payload });
});

// ---- Emit notification (test) ----
app.post("/emit/notification", (req, res) => {
  const { userId, title, message, type } = req.body;

  const payload = {
    userId,
    title: title || "Notification",
    message: message || "Hello from PharmaFinder",
    type: type || "info",
    createdAt: new Date().toISOString(),
  };

  if (userId) {
    io.to(`user:${userId}`).emit("notif:new", payload);
  }

  return res.json({ ok: true, emitted: payload });
});

const PORT = process.env.SOCKET_PORT || 4000;

(async () => {
  await connectRedisOptional(); // warns once if Redis not running
  server.listen(PORT, () => console.log(`Socket server running on http://localhost:${PORT}`));
})();
