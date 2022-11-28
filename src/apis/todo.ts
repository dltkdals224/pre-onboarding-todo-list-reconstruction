import { client } from "./client";

export const getTodoApi = async () => {
  return client.get("/todos");
};

export const createTodoApi = async (todo: any) => {
  return client.post("/todos", { todo });
};

export const updateTodoApi = async (id: any, todo: any, isCompleted: any) => {
  return client.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async (id: any) => {
  return client.delete(`/todos/${id}`);
};
