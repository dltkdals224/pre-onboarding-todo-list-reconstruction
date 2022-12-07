import styled, { css } from "styled-components";
import { useForm, FieldValues, ValidateResult } from "react-hook-form";

import { signUpApi } from "../../apis/auth";

import ReportError from "../../utils/ReportError";

import { SIGNUP_INPUT_VALIDATION } from "../../constants/Authentication";

const SignUp = ({ isDefaultForm }: { isDefaultForm: boolean }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((e) => setTimeout(e, 300));

    try {
      const res = await signUpApi(data.email, data.password);
      if (res.statusText === "Created") {
        alert("회원가입을 축하드립니다.");
      }
    } catch (error: unknown) {
      ReportError(error);
    }
  };

  return (
    <Section isDefaultForm={isDefaultForm}>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpTitle>Create Account</SignUpTitle>

        <SignUpInput
          autoComplete="username"
          placeholder="Email"
          aria-invalid={isDirty || errors.email ? "true" : "false"}
          {...register("email", SIGNUP_INPUT_VALIDATION.email)}
        />
        <ErrorMessage>{`${errors.email?.message ?? ""}`}</ErrorMessage>

        <SignUpInput
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          aria-invalid={isDirty || errors.passwrod ? "true" : "false"}
          {...register("password", SIGNUP_INPUT_VALIDATION.password)}
        />
        <ErrorMessage>{`${errors.password?.message ?? ""}`}</ErrorMessage>

        <SignUpInput
          type="password"
          autoComplete="new-password"
          placeholder="Password Reconfirm"
          aria-invalid={isDirty || errors.passwordReconfirm ? "true" : "false"}
          {...register("passwordReconfirm", {
            ...SIGNUP_INPUT_VALIDATION.passwordReconfirm,
            validate: {
              matchPassword: (passwordReconfirm): ValidateResult => {
                return (
                  passwordReconfirm === watch("password") ||
                  "비밀번호가 일치하지 않습니다."
                );
              },
            },
          })}
        />
        <ErrorMessage>{`${
          errors.passwordReconfirm?.message ?? ""
        }`}</ErrorMessage>

        <SignUpButton disabled={isSubmitting}>Sign Up</SignUpButton>
      </SignUpForm>
    </Section>
  );
};

export default SignUp;

const Section = styled.section<{ isDefaultForm: Boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 50%;
  height: 100%;

  transition: all 0.6s ease-in-out;

  opacity: 0;
  z-index: 1;

  ${(props) =>
    props.isDefaultForm &&
    css`
      transform: translateX(100%);
      animation: show 0.6s;
      opacity: 1;
      z-index: 5;
    `}
`;

const SignUpForm = styled.form`
  ${(props) => props.theme.FLEX_CENTER}
  flex-direction: column;

  height: 100%;

  padding: 0 50px;

  background-color: ${(props) => props.theme.WHITE};
  text-align: center;
`;

const SignUpTitle = styled.h1`
  margin-bottom: 24px;
`;

const SignUpInput = styled.input`
  width: 100%;

  padding: 12px 15px;
  margin: 8px 0;

  background-color: ${(props) => props.theme.WHITE_2};
  border: none;
`;

const SignUpButton = styled.button`
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
