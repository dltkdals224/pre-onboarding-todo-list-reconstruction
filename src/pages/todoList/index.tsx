import Logout from "../../components/TodoList/Logout";
import TodoInput from "../../components/TodoList/TodoInput";
import TodoItem from "../../components/TodoList/TodoItem";

import useGetTodoListQuery from "../../hooks/shared/useGetTodoListQuery";

import { TodoDataObject } from "../../constants/Types";

import * as Style from "./style";

const TodoList = () => {
  const { data: todoList, isLoading, isError } = useGetTodoListQuery();

  return (
    <Style.Article>
      <Logout />
      <TodoInput />

      <Style.TodoList>
        {todoList?.data.map((todoData: TodoDataObject) => {
          return <TodoItem key={todoData.id} data={todoData} />;
        })}
      </Style.TodoList>
    </Style.Article>
  );
};

export default TodoList;
