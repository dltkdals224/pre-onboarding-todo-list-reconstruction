import { useQueryClient, useMutation } from "react-query";

import { updateTodoApi } from "../../apis/todo";

import useInput from "../useInput";

const useEditTodoListQuery = (todoId: number, todoText: string) => {
  const { input: editInput, handleChange } = useInput(todoText);

  const useEditTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(
      async (isCompleted: boolean) =>
        await updateTodoApi(todoId, editInput, isCompleted),
      {
        onSuccess: () => {
          queryClient.refetchQueries(["todoList"]);
        },
      }
    );
  };

  const editionTrigger = useEditTodo();
  const editTodo = (isCompleted: boolean) => {
    editionTrigger.mutate(isCompleted);
  };

  return {
    handleChange,
    editTodo,
  };
};

export default useEditTodoListQuery;
