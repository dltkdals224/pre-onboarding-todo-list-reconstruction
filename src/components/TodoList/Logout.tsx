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

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

const LogoutButton = styled.button`
  width: 24px;
  height: 24px;

  border: 0.1px solid ${(props) => props.theme.GRAY};
  border-radius: 100%;
  background-color: ${(props) => props.theme.GRAY_2};

  cursor: pointer;
`;
