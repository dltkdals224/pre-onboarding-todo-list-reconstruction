import { client } from "./client";

export const getTodoApi = async () => {
  return client.get("/todos");
};

export const createTodoApi = async (todo: string) => {
  return client.post("/todos", { todo });
};

export const updateTodoApi = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  return client.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async (id: number) => {
  return client.delete(`/todos/${id}`);
};
