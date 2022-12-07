import styled from "styled-components";

import { removeAccessToken } from "../../utils/HandleAccessToken";

const Logout = () => {
  return (
    <Wrapper>
      <LogoutButton onClick={removeAccessToken}>x</LogoutButton>
    </Wrapper>
  );
};

export default Logout;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  background-color: #f5f5dc;
`;

const LogoutButton = styled.button`
  width: 24px;
  height: 24px;

  border: 0.1px solid gray;
  border-radius: 100%;
  background-color: #efefef;

  cursor: pointer;
`;
