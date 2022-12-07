import { useQueryClient, useMutation } from "react-query";

import { createTodoApi } from "../../apis/todo";

import useInput from "../useInput";

const useCreateTodoListQuery = () => {
  const {
    input: creationInputValue,
    setInput: setCreationInputValue,
    handleChange,
  } = useInput("");

  const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(async () => await createTodoApi(creationInputValue), {
      onSuccess: () => {
        queryClient.refetchQueries(["todoList"]);
      },
    });
  };

  const creationTrigger = useCreateTodo();
  const createTodo = () => {
    creationTrigger.mutate();
    setCreationInputValue("");
  };

  return {
    creationInputValue,
    handleChange,
    createTodo,
  };
};

export default useCreateTodoListQuery;
