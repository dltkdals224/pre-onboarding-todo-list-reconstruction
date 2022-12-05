import { useFormShown } from "../../hooks/useFormShown";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Overlay from "../../components/Overlay";

import * as Style from "./style";

const Auth = () => {
  const [isDefaultForm, setSignInForm, setSignUpForm] = useFormShown(false);

  // 4. 투두리스트 기본 틀 구현 (설계에 힘 써야 함)
  // 5. 동작 확인

  // 6. 웹 최적화

  return (
    <Style.Article>
      <SignIn isDefaultForm={isDefaultForm} />
      <SignUp isDefaultForm={isDefaultForm} />
      <Overlay
        isDefaultForm={isDefaultForm}
        setSignInForm={setSignInForm}
        setSignUpForm={setSignUpForm}
      />
    </Style.Article>
  );
};

export default Auth;
