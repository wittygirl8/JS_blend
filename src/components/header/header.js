import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/js-blend-logo-psnd-1.png';
require('./index.css')
const Header = ({data}) => {
    const [isShow, setIsShow] = useState(false);
    const [header, setHeader] = useState('nav-1')
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    const listenScrollEvent = (event) => {
        if (window.scrollY < 573) {
          return setHeader("nav-1")
        } else if (window.scrollY > 570) {
          return setHeader("nav-2")
        } 
      }
    const handletoggle = () => {
        console.log(isShow)
        if(isShow){
            setIsShow(false)
        }else {
            setIsShow(true)
        }
    }
    return (
        <div>
            <nav className={`${header} fixed-top`}>
                <a href="/">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
                <ul className={isShow? "show": ""}>
                    <li><a href="/" className={data=== 'index'? 'active': ""}>Home</a></li>
                    <li><a href="/#about-us" className={data === 'about'? "active": ""}>About</a></li>
                    <li><a href="/#portfolio" className={data === 'portfolio'? "active": ""}>Portfolio</a></li>
                    <li><a href="/#contact" className={data === 'contact'? "active": ""}>Contact</a></li>
                    <li><a href="/#blog" className={data === 'blog'? "active": ""}>Blog</a></li>
                </ul>
                <label className="icon" onClick={(e) => handletoggle(e)}>
                    <i className="fa fa-bars"></i>
                </label>
            </nav>
        </div>
    );
};

export default Header;