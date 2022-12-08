import styled from "styled-components";

export const Article = styled.article`
  position: relative;

  min-width: 768px;
  max-width: 100%;

  height: 768px;

  background-color: ${(props) => props.theme.MAIN_B_1};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  overflow: hidden;

  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
`;

export const TodoList = styled.section`
  height: 688px;

  overflow-y: scroll;
`;
