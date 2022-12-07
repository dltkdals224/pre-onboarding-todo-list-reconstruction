import { ChangeEvent, useState } from "react";

const useInput = (initialValue?: string) => {
  const [input, setInput] = useState(initialValue ?? "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, setInput, handleChange };
};

export default useInput;
