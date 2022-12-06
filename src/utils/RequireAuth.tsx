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
    return <Navigate to={redirectUrl} replace />;
  }
  if (!isAuthRequired && !!ACCESS_TOKEN) {
    return <Navigate to={redirectUrl} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
