import { useEffect, useState } from "react";

export const useDebounce = <T>(
  value: T,
  delay: number,
  cb: (value?: T) => Promise<void>
) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(async () => {
      setDebounceValue(value);
      await cb(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
