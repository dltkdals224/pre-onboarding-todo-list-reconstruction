import { useCallback, useState } from "react";

export const useFormShown = (
  initialValue: boolean
): [boolean, Function, Function] => {
  const [isDefaultForm, setIsDefaultForm] = useState<boolean>(
    initialValue ?? true
  );

  const setSignInForm = useCallback(() => {
    setIsDefaultForm(true);
  }, []);

  const setSignUpForm = useCallback(() => {
    setIsDefaultForm(false);
  }, []);

  return [isDefaultForm, setSignInForm, setSignUpForm];
};
