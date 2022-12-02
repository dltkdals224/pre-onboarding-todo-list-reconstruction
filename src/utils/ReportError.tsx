import { AxiosError } from "axios";

const ReportError = (error: unknown) => {
  let reportErrorMessage = "Unknown Error";
  let alertErrorMessage = "Unknown Error";

  if (error instanceof AxiosError) {
    reportErrorMessage = error.message;
    alertErrorMessage = error.response?.data.message;

    alert(alertErrorMessage);
  }

  reportError({ reportErrorMessage });
};

export default ReportError;
