import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

server.listen(3000, async () => {
  await connectDB();
  console.log(`server started on port 3000`);
});
