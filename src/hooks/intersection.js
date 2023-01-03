import {useState, useEffect} from 'react';

const useElementOnScreen = (element, margin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [element, margin]);
  return isIntersecting;
};

export default useElementOnScreen;
