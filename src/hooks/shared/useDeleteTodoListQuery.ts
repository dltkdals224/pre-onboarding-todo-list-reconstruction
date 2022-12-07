import { useQueryClient, useMutation } from "react-query";

import { deleteTodoApi } from "../../apis/todo";

const useDeleteTodoListQuery = (todoId: number) => {
  const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(async () => await deleteTodoApi(todoId), {
      onSuccess: () => {
        queryClient.refetchQueries(["todoList"]);
      },
    });
  };
  const deletionTrigger = useDeleteTodo();
  const deleteTodo = () => {
    deletionTrigger.mutate();
  };

  return {
    deleteTodo,
  };
};

export default useDeleteTodoListQuery;
