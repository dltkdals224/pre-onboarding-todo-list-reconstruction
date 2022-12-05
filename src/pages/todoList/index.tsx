import { useQuery } from "react-query";

import TodoInput from "../../components/TodoList/TodoInput";
import TodoItem from "../../components/TodoList/TodoItem";

import { getTodoApi } from "../../apis/todo";

import * as Style from "./style";

const TodoList = () => {
  // custom hook 처리 가능
  const useGetTodoListQuery = () => {
    return useQuery({
      queryKey: ["todoList"],
      queryFn: () => {
        return getTodoApi();
      },
    });
  };
  //
  const { data: todoList, isLoading, isError } = useGetTodoListQuery();

  return (
    <Style.Article>
      <TodoInput />

      <Style.TodoList>
        {todoList?.data.map((todo: any) => {
          return <TodoItem key={todo.id} data={todo} />;
        })}
      </Style.TodoList>
    </Style.Article>
  );
};

export default TodoList;
