import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (Math.round(window.scrollY) > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`
                        fixed
                        navigation_button    
                        self-center
                        bottom-[5rem] 
                        button__style
                        ${isVisible ? '' : 'hidden'}
                        `}
      onClick={handleClick}
    >
      <span>Back to Top</span>
    </button>
  );
};

export default BackToTop;
