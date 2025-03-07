import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Unable to connect to MongoDB", e);
  });

io.on("connection", (socket) => {
  console.log("New WebSocket connection");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

export { io };
