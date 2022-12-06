import styled from "styled-components";
import Cookies from "universal-cookie";

const Logout = () => {
  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("ACCESS_TOKEN");

    window.location.reload();
  };

  return (
    <Wrapper>
      <LogoutButton onClick={logout}>x</LogoutButton>
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
