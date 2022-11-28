import { client } from "./client";

export const signInApi = async (email: string, password: string) => {
  return client.post("/auth/signin", { email, password });
};

export const signUpApi = async (email: string, password: string) => {
  return client.post("/auth/signup", { email, password });
};
