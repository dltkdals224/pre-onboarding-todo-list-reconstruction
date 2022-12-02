export const SIGNIN_INPUT_VALIDATION = {
  email: {
    required: true,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "이메일 형식에 맞지 않습니다.",
    },
  },
  password: {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요.",
    },
  },
};

export const SIGNUP_INPUT_VALIDATION = {
  email: {
    required: true,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "이메일 형식에 맞지 않습니다.",
    },
  },
  password: {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요.",
    },
    minLength: {
      value: 8,
      message: "8자리 이상의 비밀번호를 입력해주세요.",
    },
  },
  passwordReconfirm: {
    required: true,
    minLength: {
      value: 8,
      message: "8자리 이상의 비밀번호를 입력해주세요.",
    },
  },
};
