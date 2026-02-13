import { createClient } from "redis";

export const redis = createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379",
  socket: {
    reconnectStrategy: () => false, // STOP infinite reconnect attempts
  },
});

let warned = false;
redis.on("error", (err) => {
  if (!warned) {
    console.log("Redis not running yet (ok for now):", err?.message || err);
    warned = true;
  }
});

export async function connectRedisOptional() {
  try {
    if (!redis.isOpen) await redis.connect();
    console.log("Redis ready ✅");
    return true;
  } catch {
    return false;
  }
}
