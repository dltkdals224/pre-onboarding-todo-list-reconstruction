import styled from "styled-components";

export const Article = styled.article`
  ${(props) => props.theme.FLEX_CENTER}

  width: 100vw;
  height: 100vh;
`;

export const InnerArticle = styled.article`
  position: relative;

  width: 768px;
  max-width: 100%;
  min-height: 480px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  overflow: hidden;
`;
