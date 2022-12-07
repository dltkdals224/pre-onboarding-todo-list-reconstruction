import { useFormShown } from "../../hooks/useFormShown";

import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import Overlay from "../../components/Auth/Overlay";

import * as Style from "./style";

const Auth = () => {
  const [isDefaultForm, setSignInForm, setSignUpForm] = useFormShown(false);

  // 3. 쉬어가기 - 디자인 수정 (까지 마치기 맨)
  // 4. 정말 디자인까지 마무리

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
