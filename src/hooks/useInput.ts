import { ChangeEvent, useState, useCallback } from "react";

const useInput = (initialValue?: string) => {
  const [input, setInput] = useState(initialValue ?? "");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }, []);

  return { input, setInput, handleChange };
};

export default useInput;
