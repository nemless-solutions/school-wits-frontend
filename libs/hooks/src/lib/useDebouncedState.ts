import { useState, useRef, useCallback } from "react";

function useDebouncedState<T>(
  initialValue: T,
  delay = 500
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // useCallback to memoize the setter
  const setDebouncedState = useCallback(
    (value: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setState(value);
      }, delay);
    },
    [delay]
  );

  return [state, setDebouncedState];
}

export default useDebouncedState;
