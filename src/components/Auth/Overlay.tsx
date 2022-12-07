import styled, { css } from "styled-components";

const Overlay = ({
  isDefaultForm,
  setSignInForm,
  setSignUpForm,
}: {
  isDefaultForm: boolean;
  setSignInForm: Function;
  setSignUpForm: Function;
}) => {
  const handleClick = () => {
    if (isDefaultForm) {
      setSignUpForm();
    }
    if (!isDefaultForm) {
      setSignInForm();
    }
  };

  return (
    <Section isDefaultForm={isDefaultForm}>
      <Wrapper>
        <OverlayPanel>
          <h1>
            {isDefaultForm
              ? `Have you already signed up?`
              : `Hello, Is this your first visit?`}
          </h1>
          <p>this todolist made by Sangmin</p>
          <OverlayButton onClick={handleClick}>
            {isDefaultForm ? `SIGN IN` : `SIGN UP`}
          </OverlayButton>
        </OverlayPanel>
      </Wrapper>
    </Section>
  );
};

export default Overlay;

const Section = styled.section<{ isDefaultForm: boolean }>`
  position: absolute;
  top: 0;

  left: 50%;
  width: 50%;
  height: 100%;

  transition: transform 0.6s ease-in-out;
  z-index: 100;

  overflow: hidden;

  ${(props) =>
    props.isDefaultForm &&
    css`
      transform: translateX(-100%);
    `}
`;

const Wrapper = styled.div`
  position: relative;
  left: -100%;

  height: 100%;
  width: 200%;

  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;

  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  right: 0;
  transform: translateX(0);
`;

const OverlayPanel = styled.div`
  position: absolute;
  ${(props) => props.theme.FLEX_CENTER}
  flex-direction: column;
  top: 0;

  width: 50%;
  height: 100%;

  padding: 0 40px;

  text-align: center;

  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  right: 0;
  transform: translateX(0);
`;

const OverlayButton = styled.button`
  padding: 12px 45px;

  border: 1px solid #ff4b2b;
  border-radius: 20px;
  border-color: #ffffff;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: transparent;

  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }
`;
