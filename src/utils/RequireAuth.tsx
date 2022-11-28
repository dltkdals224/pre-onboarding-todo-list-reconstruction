import { Outlet, Navigate } from "react-router-dom";

import Cookies from "universal-cookie";

interface Props {
  isAuthRequired: boolean;
  redirectUrl: string;
}

const RequireAuth = ({ isAuthRequired, redirectUrl }: Props) => {
  const cookies = new Cookies();
  const ACCESS_TOKEN = cookies.get("ACCESS_TOKEN");

  if (isAuthRequired && !ACCESS_TOKEN) {
    alert("접근 권한이 없습니다.");
    return <Navigate to={redirectUrl} replace />;
  }
  if (!isAuthRequired && !!ACCESS_TOKEN) {
    alert("이미 로그인 되었습니다.");
    return <Navigate to={redirectUrl} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
