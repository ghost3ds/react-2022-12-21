import { useCallback, useState } from 'react';

export const useCount = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const increment = useCallback(() => setCount((prevState) => prevState + 1), []);
  const decrement = useCallback(() => setCount((prevState) => prevState - 1), []);

  return { count, increment, decrement };
};
