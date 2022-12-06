import axios from "axios";

import { getAccessToken } from "../utils/HandleAccessToken";

const ACCESS_TOKEN = getAccessToken();

const BACKEND_BASE_URL = process.env.REACT_APP_API_URL;

const client = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

client.defaults.headers.Authorization =
  ACCESS_TOKEN && `Bearer ${ACCESS_TOKEN}`;

export { BACKEND_BASE_URL, client };
