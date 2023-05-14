import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debouncedFunction = debounce((newValue: T) => {
      setDebouncedValue(newValue);
    }, delay);

    debouncedFunction(value);

    return () => {
      debouncedFunction.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
