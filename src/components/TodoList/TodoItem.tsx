import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled, { css } from "styled-components";

import { updateTodoApi, deleteTodoApi } from "../../apis/todo";

import useFocus from "../../hooks/useFocus";

const TodoItem = ({ data }: { data: any }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { ref: inputFocusRef, setIsFocused } = useFocus(false);

  // handleChange,
  const [editInputValue, setEditInputValue] = useState(data.todo);
  const handleChange = (e: any) => {
    setEditInputValue(e.target.value);
  };

  const useEditTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(
      async (type) => await updateTodoApi(data.id, editInputValue, type),
      {
        onSuccess: () => {
          queryClient.refetchQueries(["todoList"]);
        },
      }
    );
  };

  const editionTrigger = useEditTodo();
  const editTodo = (type: any) => {
    editionTrigger.mutate(type);
  };

  //

  const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(async () => await deleteTodoApi(data.id), {
      onSuccess: () => {
        queryClient.refetchQueries(["todoList"]);
      },
    });
  };
  const deletionTrigger = useDeleteTodo();
  const deleteTodo = () => {
    deletionTrigger.mutate();
  };

  //
  const operateEdit = () => {
    setIsEditMode(true);
    setIsFocused(true);
  };

  const completeEdit = () => {
    setIsFocused(false);
    editTodo(data.isCompleted);
    setIsEditMode(false);
  };

  const handleEditionInputKeyDown = (e: any) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      completeEdit();
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <CheckBox
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => {
            editTodo(!data.isCompleted);
          }}
        />

        {isEditMode ? (
          <TodoEditInput
            ref={inputFocusRef}
            onChange={handleChange}
            onKeyDown={handleEditionInputKeyDown}
            defaultValue={data.todo}
          />
        ) : (
          <TodoText isCompleted={data.isCompleted}>{data.todo}</TodoText>
        )}
      </InnerWrapper>

      <ButtonWrapper>
        <EditButton onClick={isEditMode ? completeEdit : operateEdit}>
          {isEditMode ? `완료` : `수정`}
        </EditButton>

        <DeleteButton onClick={deleteTodo}>삭제</DeleteButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 80px;

  background-color: #f5f5dc;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 640px;
  height: 60px;

  gap: 10px;
  padding-left: 10px;

  background-color: white;
  border-radius: 10px;
`;

const CheckBox = styled.input``;

const TodoEditInput = styled.input`
  width: 90%;
  height: 30px;

  margin-left: -3px;

  border: 0;

  font-weight: 400;
  color: gray;
`;

const TodoText = styled.span<{ isCompleted: Boolean }>`
  font-size: 14px;
  font-weight: 600;

  ${(props) =>
    props.isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;

const ButtonWrapper = styled.div`
  ${(props) => props.theme.FLEX_CENTER}
  flex-direction:column;

  width: 64px;
  height: 60px;

  gap: 5px;

  border-radius: 5px;
  background-color: ${(props) => props.theme.WHITE};
`;

const EditButton = styled.button`
  width: 48px;
  height: 24px;

  border: 0.1px solid gray;
  border-radius: 3px;

  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 48px;
  height: 24px;

  border: 0.1px solid gray;
  border-radius: 3px;

  cursor: pointer;
`;
