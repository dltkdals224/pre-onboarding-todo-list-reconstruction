import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import Cookies from "universal-cookie";

import { signInApi } from "../apis/auth";

import ReportError from "../utils/ReportError";

import { SIGNIN_INPUT_VALIDATION } from "../constants/Authentication";

const SignIn = ({ isDefaultForm }: { isDefaultForm: any }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const setAccessToken = (responseData: any) => {
    cookies.set("ACCESS_TOKEN", responseData.data.access_token, {
      expires: new Date(Date.now() + 1000 * 60 * 59),
      secure: true,
    });
  };

  const navigateToHome = () => {
    navigate("/todo");
  };

  const onSubmit = async (data: FieldValues) => {
    await new Promise((e) => setTimeout(e, 300));

    try {
      const res = await signInApi(data.email, data.password);
      setAccessToken(res);
      navigateToHome();
    } catch (error: unknown) {
      ReportError(error);
    }
  };

  return (
    <Section className="sign-in-container" isDefaultForm={isDefaultForm}>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <SocialContainer className="social-container">
          <a>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a>
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </SocialContainer>

        <span>or use your account</span>
        <SignInInput
          autoComplete="username"
          placeholder="Email"
          aria-invalid={isDirty || errors.email ? "true" : "false"}
          {...register("email", SIGNIN_INPUT_VALIDATION.email)}
        />
        <ErrorMessage>{`${errors.email?.message ?? ""}`}</ErrorMessage>

        <SignInInput
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          aria-invalid={isDirty || errors.passwrod ? "true" : "false"}
          {...register("password", SIGNIN_INPUT_VALIDATION.password)}
        />
        <ErrorMessage>{`${errors.password?.message ?? ""}`}</ErrorMessage>

        <SignInButton disabled={isSubmitting}>Sign In</SignInButton>
      </SignInForm>
    </Section>
  );
};

export default SignIn;

const Section = styled.section<{ isDefaultForm: any }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 50%;
  height: 100%;

  transition: all 0.6s ease-in-out;

  z-index: 2;

  ${(props) =>
    props.isDefaultForm &&
    css`
      transform: translateX(100%);
    `}
`;

const SignInForm = styled.form`
  ${(props) => props.theme.FLEX_CENTER}
  flex-direction: column;

  height: 100%;

  padding: 0 50px;

  text-align: center;
`;

const SocialContainer = styled.div`
  margin: 20px 0;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    margin: 0 5px;

    border: 1px solid #dddddd;
    border-radius: 50%;
  }
`;

const SignInInput = styled.input`
  width: 100%;

  padding: 12px 15px;
  margin: 8px 0;

  background-color: #eee;
  border: none;
`;

const SignInButton = styled.button`
  padding: 12px 45px;
  margin-top: 24px;

  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;

  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
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

const ErrorMessage = styled.span`
  display: flex;

  width: 100%;

  margin-top: -5px;

  color: ${(props) => props.theme.R_1};
  font-size: 10px;
  font-weight: 600;
`;
