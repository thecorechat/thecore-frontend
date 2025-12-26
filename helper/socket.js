import { io } from "socket.io-client";

const URL = "";

export const socket = io(URL, {
  withCredentials: true,
  transports: ["websocket", "polling"],
});
