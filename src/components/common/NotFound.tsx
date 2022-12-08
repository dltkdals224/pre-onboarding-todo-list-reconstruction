import styled from "styled-components";

const NotFound = () => {
  return <TextWrapper>404 ERR : 페이지를 찾을 수 없습니다.</TextWrapper>;
};

export default NotFound;

const TextWrapper = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
