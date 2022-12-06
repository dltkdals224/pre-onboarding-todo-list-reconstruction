/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef, useState } from "react";

const useFocus = (defaultFocused = false) => {
  const ref = useRef<any>();
  const [isFocused, setIsFocused] = useState(defaultFocused);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    if (isFocused) {
      ref.current.focus();
    }

    ref.current.addEventListener("focus", onFocus);
    ref.current.addEventListener("blur", onBlur);
  }, [isFocused]);

  return { ref, isFocused, setIsFocused };
};

export default useFocus;
