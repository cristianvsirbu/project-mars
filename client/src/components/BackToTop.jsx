import { useState, useEffect } from 'react'

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

    const handleClick = (e) => {
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
                        self-center
                        bottom-[2rem] 
                        button__style
                        ${isVisible ? '' : 'hidden'}
                        `}
            onClick={handleClick}
        >
            <a href="#" aria-label="Scroll back to top">
                Back to Top
            </a>
        </button>
    );
}

export default BackToTop