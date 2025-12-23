import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(
  initialState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(JSON.parse(storedValue));
      }
    } catch {
      setValue(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setAndStore = useCallback<React.Dispatch<React.SetStateAction<T>>>(
    (update) => {
      setValue((prev) => {
        const newValue = update instanceof Function ? update(prev) : update;
        try {
          if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(newValue));
          }
        } catch {
          /* eslint-disable no-empty */
        }
        return newValue;
      });
    },
    [key]
  );

  return [value, setAndStore];
}
