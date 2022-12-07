import { useFormShown } from "../../hooks/useFormShown";

import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import Overlay from "../../components/Auth/Overlay";

import * as Style from "./style";

const Auth = () => {
  const [isDefaultForm, setSignInForm, setSignUpForm] = useFormShown(false);

  // 5. 웹 최적화
  // 6. 배포 , readme.md

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
