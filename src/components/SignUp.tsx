import styled, { css } from "styled-components";
import { useForm, Resolver } from "react-hook-form";

const SignUp = ({ isDefaultForm }: { isDefaultForm: any }) => {
  type FormValues = {
    email: string;
    password: string;
    reconfirmPassword: string;
  };

  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values ?? {},
      errors: !values.email
        ? {
            error: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  return (
    <Section
      isDefaultForm={isDefaultForm}
      onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}
    >
      <SignUpForm>
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
        <SignUpInput placeholder="Email" {...register("email")} />
        <SignUpInput placeholder="Password" {...register("password")} />
        <SignUpInput
          placeholder="Reconfirm Password"
          {...register("reconfirmPassword")}
        />
        <SignUpButton>Sign Up</SignUpButton>
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
