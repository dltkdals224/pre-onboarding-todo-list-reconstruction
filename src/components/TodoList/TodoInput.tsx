import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

import { createTodoApi } from "../../apis/todo";

const TodoInput = () => {
  // custom hook 처리 가능
  const [test, setTest] = useState();

  const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(async () => await createTodoApi(test), {
      onSuccess: () => {
        queryClient.refetchQueries(["todoList"]);
      },
    });
  };
  const saveData = useCreateTodo();
  const confirmSaveCartData = () => {
    saveData.mutate();
  };

  const handleChange = (e: any) => {
    setTest(e.target.value);
  };
  //

  // 추가 구현

  // enter에 대한 처리
  // input value 비우기

  return (
    <Wrapper>
      <InputWrapper>
        <CreationInput
          placeholder="할 일을 입력해주세요."
          onChange={handleChange}
        />
        <CreationButton onClick={confirmSaveCartData}>+</CreationButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  ${(props) => props.theme.FLEX_CENTER}

  width: 100%;
  height: 80px;

  margin-top: 20px;

  background-color: red;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 704px;
  height: 60px;

  background-color: blue;
`;

const CreationInput = styled.input`
  width: 640px;
  height: 32px;
`;

const CreationButton = styled.button`
  width: 32px;
  height: 32px;
`;
