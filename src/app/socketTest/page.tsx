"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function SocketTestPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const userId = "user123"; // test user room

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", () => {
      setLogs((p) => [`connected: ${socket.id}`, ...p]);
      socket.emit("room:join", { pharmacyId: "ph1", medicationId: "med1", userId });
    });

    socket.on("room:joined", (data) => {
      setLogs((p) => [`room:joined ${JSON.stringify(data)}`, ...p]);
    });

    socket.on("stock:update", (payload) => {
      setLogs((p) => [`stock:update ${JSON.stringify(payload)}`, ...p]);
    });

    socket.on("notif:new", (payload) => {
      setLogs((p) => [`notif:new ${JSON.stringify(payload)}`, ...p]);
    });

    socket.on("disconnect", () => {
      setLogs((p) => ["disconnected", ...p]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Socket Test</h2>
      <p>Rooms: pharmacy:ph1 | med:med1 | user:user123</p>
      <div style={{ marginTop: 12 }}>
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
