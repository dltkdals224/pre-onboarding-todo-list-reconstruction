import { useState } from "react";

const useInput = (initialValue?: string) => {
  const [input, setInput] = useState(initialValue ?? "");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return { input, setInput, handleChange };
};

export default useInput;
