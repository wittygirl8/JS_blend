import React, {useEffect, useState} from 'react';
import './index.css';
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const listenScrollEvent = (event) => {
            if (window.scrollY < 400) {
              return setVisible(false)
            } else if (window.scrollY > 400) {
              return setVisible(true)
            } 
        }
        console.log(visible)
        const windowScrollEvent = () => {
            window.addEventListener('scroll', listenScrollEvent);
            return () =>  window.removeEventListener('scroll', listenScrollEvent)
        }
        
        windowScrollEvent();
    }, [])
    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    return (
        <div>
            {visible && <button className="btn btn-danger scroll-to-top" onClick={scrollToTop}><i className="fa fa-chevron-up"></i></button>}
        </div>
    )
};

export default ScrollToTop;