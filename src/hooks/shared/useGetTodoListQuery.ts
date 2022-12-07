import { useQuery } from "react-query";

import { getTodoApi } from "../../apis/todo";

const useGetTodoListQuery = () => {
  return useQuery({
    queryKey: ["todoList"],
    queryFn: () => {
      return getTodoApi();
    },
  });
};

export default useGetTodoListQuery;
