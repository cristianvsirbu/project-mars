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
                onClick={scrollToTop}
        ><a>Back to Top</a>
            </button>
    );
}

export default BackToTop