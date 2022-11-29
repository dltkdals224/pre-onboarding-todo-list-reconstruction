import styled, { css } from "styled-components";

const SignUp = ({ isDefaultForm }: { isDefaultForm: any }) => {
  return (
    <Section className="sign-up-container" isDefaultForm={isDefaultForm}>
      <SignUpForm>
        <h1>Create Account</h1>
        <SocialContainer className="social-container">
          <a className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </SocialContainer>
        <span>or use your email for registration</span>
        <SignUpInput type="text" placeholder="Email" />
        <SignUpInput type="email" placeholder="Password" />
        <SignUpInput type="password" placeholder="Reconfirm Password" />
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpForm>
    </Section>
  );
};

export default SignUp;

const Section = styled.section<{ isDefaultForm: any }>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;

  ${(props) =>
    props.isDefaultForm &&
    css`
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.6s;
    `}
`;

const SignUpForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const SocialContainer = styled.div`
  margin: 20px 0;

  a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
`;

const SignUpInput = styled.input`
  width: 100%;

  padding: 12px 15px;
  margin: 8px 0;

  background-color: #eee;
  border: none;
`;

const SignUpButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }
`;
