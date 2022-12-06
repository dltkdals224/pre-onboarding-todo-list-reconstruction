import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

import { createTodoApi } from "../../apis/todo";

const TodoInput = () => {
  // custom hook 처리 가능
  const [creationInputValue, setCreationInputValue] = useState("");

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
  //

  const handleCreationInputChange = (e: any) => {
    setCreationInputValue(e.target.value);
  };

  const handleCreationInputKeyDown = (e: any) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      createTodo();
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <CreationInput
          placeholder="할 일을 입력해주세요."
          autoFocus
          onChange={handleCreationInputChange}
          onKeyDown={handleCreationInputKeyDown}
          value={creationInputValue}
        />
        <CreationButton onClick={createTodo}>+</CreationButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  ${(props) => props.theme.FLEX_CENTER}

  width: 100%;
  height: 80px;

  background-color: #f5f5dc;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 704px;
  height: 60px;

  border-radius: 10px;

  background-color: white;
`;

const CreationInput = styled.input`
  width: 640px;
  height: 32px;

  border: 0px;
`;

const CreationButton = styled.button`
  width: 32px;
  height: 32px;

  border: 0.1px solid gray;
  border-radius: 2px;
  background-color: #efefef;

  cursor: pointer;
`;
