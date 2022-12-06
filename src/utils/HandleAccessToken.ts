import Cookies from "universal-cookie";

const cookies = new Cookies();

const handlePageRenderByTokenStatus = () => {
  window.location.reload();
};

const setAccessToken = (access_token: string) => {
  cookies.set("ACCESS_TOKEN", access_token, {
    expires: new Date(Date.now() + 1000 * 60 * 59),
  });

  handlePageRenderByTokenStatus();
};

const getAccessToken = () => {
  return cookies.get("ACCESS_TOKEN");
};

const removeAccessToken = () => {
  cookies.remove("ACCESS_TOKEN");

  handlePageRenderByTokenStatus();
};

export {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  handlePageRenderByTokenStatus,
};
