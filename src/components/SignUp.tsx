import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";

const SignUp = ({ isDefaultForm }: { isDefaultForm: any }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onValid = async (data: any) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(data);
    alert(JSON.stringify(data));

    // passwordReconfirm 확인 로직
  };

  return (
    <Section isDefaultForm={isDefaultForm}>
      <SignUpForm onSubmit={handleSubmit(onValid)}>
        <h1>Create Account</h1>
        <SocialContainer>
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

        <span>or use your email for registration</span>
        <SignUpInput
          placeholder="Email"
          aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <>{errors.email.message}</>}

        <SignUpInput
          type="password"
          placeholder="Password"
          aria-invalid={
            !isDirty ? undefined : errors.passwrod ? "true" : "false"
          }
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "8자리 이상의 비밀번호를 입력해주세요.",
            },
          })}
        />
        {errors.password && <>{errors.password.message}</>}

        <SignUpInput
          type="password"
          placeholder="Password Reconfirm"
          aria-invalid={
            !isDirty ? undefined : errors.passwordReconfirm ? "true" : "false"
          }
          {...register("passwordReconfirm", {
            required: true,
            minLength: {
              value: 8,
              message: "8자리 이상의 비밀번호를 입력해주세요.",
            },
          })}
        />
        {errors.passwordReconfirm && <>{errors.passwordReconfirm.message}</>}

        <SignUpButton disabled={isSubmitting}>Sign Up</SignUpButton>
      </SignUpForm>
    </Section>
  );
};

export default SignUp;

const Section = styled.section<{ isDefaultForm: any }>`
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

  background-color: #ffffff;
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

const SignUpInput = styled.input`
  width: 100%;

  padding: 12px 15px;
  margin: 8px 0;

  background-color: #eee;
  border: none;
`;

const SignUpButton = styled.button`
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
