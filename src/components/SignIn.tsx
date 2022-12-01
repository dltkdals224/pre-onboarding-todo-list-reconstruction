import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";

const SignIn = ({ isDefaultForm }: { isDefaultForm: any }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <Section className="sign-in-container" isDefaultForm={isDefaultForm}>
      <SignInForm
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(data));
        })}
      >
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

        <SignInInput
          type="password"
          placeholder="Password"
          aria-invalid={
            !isDirty ? undefined : errors.passwrod ? "true" : "false"
          }
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && <>{errors.password.message}</>}

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
