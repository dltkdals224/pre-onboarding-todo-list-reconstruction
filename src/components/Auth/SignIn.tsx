import { useForm, FieldValues } from "react-hook-form";
import styled, { css } from "styled-components";

import { signInApi } from "../../apis/auth";

import ReportError from "../../utils/ReportError";
import { setAccessToken } from "../../utils/HandleAccessToken";

import { SIGNIN_INPUT_VALIDATION } from "../../constants/Authentication";

const SignIn = ({ isDefaultForm }: { isDefaultForm: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((e) => setTimeout(e, 300));

    try {
      const response = await signInApi(data.email, data.password);
      setAccessToken(response.data.access_token);
    } catch (error: unknown) {
      ReportError(error);
    }
  };

  return (
    <Section isDefaultForm={isDefaultForm}>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <SignInTitle>Sign in</SignInTitle>

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

const Section = styled.section<{ isDefaultForm: Boolean }>`
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

const SignInTitle = styled.h1`
  margin-bottom: 24px;
`;

const SignInInput = styled.input`
  width: 100%;

  padding: 12px 15px;
  margin: 8px 0;

  background-color: ${(props) => props.theme.WHITE_2};
  border: none;
`;

const SignInButton = styled.button`
  padding: 12px 45px;
  margin-top: 24px;

  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.MAIN_B_2};
  background-color: ${(props) => props.theme.MAIN_B_2};

  color: ${(props) => props.theme.WHITE};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  transition: transform 80ms ease-in;

  cursor: pointer;

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
