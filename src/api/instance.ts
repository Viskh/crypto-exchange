import axios from "axios";

import { BASE_URL } from "./api.constant";

const headers: Record<string, string> = {
  "Content-Type": "application/json",
  "x-changenow-api-key": process.env.API_KEY ?? "",
};

export const instance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers,
});
