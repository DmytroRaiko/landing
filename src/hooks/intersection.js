import {useState, useEffect} from 'react';

const useElementOnScreen = (element, margin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    let observerRef = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    if (element.current) {
      observer.observe(element.current);
      observerRef = element.current;
    }

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [element, margin]);
  return isIntersecting;
};

export default useElementOnScreen;
