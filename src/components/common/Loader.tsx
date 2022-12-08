import styled from "styled-components";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <Wrapper>
      <PuffLoader size={60} speedMultiplier={2} />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  ${(props) => props.theme.FLEX_CENTER}

  width: 100%;
  height: 100%;
`;
