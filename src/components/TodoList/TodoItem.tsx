import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

import { updateTodoApi, deleteTodoApi } from "../../apis/todo";

const TodoItem = ({ data }: { data: any }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  //
  const [inputValue, setInputValue] = useState(data.todo);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const useEditTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(
      async (type) => await updateTodoApi(data.id, inputValue, type),
      {
        onSuccess: () => {
          queryClient.refetchQueries(["todoList"]);
        },
      }
    );
  };
  const saveData1 = useEditTodo();
  const confirmSaveCartData1 = (type: any) => {
    saveData1.mutate(type);
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
  const saveData = useDeleteTodo();
  const confirmSaveCartData = () => {
    saveData.mutate();
  };

  //
  const operateEdit = () => {
    setIsEditMode(true);
  };

  const completeEdit = () => {
    confirmSaveCartData1(data.isCompleted);
    setIsEditMode(false);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <CheckBox
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => {
            confirmSaveCartData1(!data.isCompleted);
          }}
        />

        {isEditMode && <TodoEditInput onChange={handleChange} />}
        {!isEditMode && <TodoText>{data.todo}</TodoText>}
      </InnerWrapper>

      <ButtonWrapper>
        <EditButton onClick={isEditMode ? completeEdit : operateEdit}>
          {isEditMode ? `완료` : `수정`}
        </EditButton>

        <DeleteButton onClick={confirmSaveCartData}>삭제</DeleteButton>
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

  background-color: green;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 640px;
  height: 60px;

  gap: 10px;
  padding-left: 10px;

  background-color: yellow;
`;

const CheckBox = styled.input``;

const TodoEditInput = styled.input`
  width: 90%;
  height: 30px;
`;

const TodoText = styled.span``;

const ButtonWrapper = styled.div`
  ${(props) => props.theme.FLEX_CENTER}
  flex-direction:column;

  width: 64px;
  height: 60px;

  gap: 5px;

  background-color: skyblue;
`;

const EditButton = styled.button`
  width: 48px;
  height: 24px;
`;

const DeleteButton = styled.button`
  width: 48px;
  height: 24px;
`;
