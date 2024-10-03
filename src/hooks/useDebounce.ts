import { useState, useEffect } from "react";

function useDebounce<T>(
  value: T,
  delay: number,
  callback: (debouncedValue: T) => void
): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!debouncedValue) {
      return;
    }
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback, debouncedValue]);

  return debouncedValue;
}

export default useDebounce;
