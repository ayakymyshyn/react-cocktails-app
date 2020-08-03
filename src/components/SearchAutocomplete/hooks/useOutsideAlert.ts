import { useEffect, useState, RefObject } from 'react';

export const useOutsideAlert = (ref: RefObject<HTMLInputElement>) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLInputElement;
    if (ref.current && !ref.current.contains(target)) {
      setClickedOutside(true);
    } else {
      setClickedOutside(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return clickedOutside;
};
