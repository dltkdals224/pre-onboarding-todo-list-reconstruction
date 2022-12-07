import { KeyboardEvent } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

import useFocus from "../../hooks/useFocus";
import useEditTodoListQuery from "../../hooks/shared/useEditTodoListQuery";
import useDeleteTodoListQuery from "../../hooks/shared/useDeleteTodoListQuery";

import handleKeyDownEnter from "../../utils/HandleKeyDownEnter";

const TodoItem = ({ data }: { data: any }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { ref: inputFocusRef, setIsFocused } = useFocus(false);

  const { handleChange: handleEditionChange, editTodo } = useEditTodoListQuery(
    data.id,
    data.todo
  );
  const { deleteTodo } = useDeleteTodoListQuery(data.id);

  const handleEditionInputKeyDown = (e: any) => {
    handleKeyDownEnter(e, completeEdit);
  };

  const operateEdit = () => {
    setIsEditing(true);
    setIsFocused(true);
  };

  const completeEdit = () => {
    setIsFocused(false);
    editTodo(data.isCompleted);
    setIsEditing(false);
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

        {isEditing ? (
          <TodoEditInput
            ref={inputFocusRef}
            onChange={handleEditionChange}
            onKeyDown={handleEditionInputKeyDown}
            defaultValue={data.todo}
          />
        ) : (
          <TodoText isCompleted={data.isCompleted}>{data.todo}</TodoText>
        )}
      </InnerWrapper>

      <ButtonWrapper>
        <EditButton onClick={isEditing ? completeEdit : operateEdit}>
          {isEditing ? `완료` : `수정`}
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
