import { useCallback, useState } from "react";

export const useFormShown = (initialValue: any) => {
  const [isDefaultForm, setIsDefaultForm] = useState(initialValue ?? true);

  const setSignInForm = useCallback(() => {
    setIsDefaultForm(true);
  }, []);

  const setSignUpForm = useCallback(() => {
    setIsDefaultForm(false);
  }, []);

  return [isDefaultForm, setSignInForm, setSignUpForm];
};
