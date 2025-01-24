import axios from "axios";
import { io } from "socket.io-client";

const apiBaseUrl = "https://m52ty5-3000.csb.app";

export const httpClient = axios.create({
  baseURL: apiBaseUrl,
});

export const docsSocketClient = io(`${apiBaseUrl}/docs`);
