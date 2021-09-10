import './footer.css';
import { Icon } from '@iconify/react';
import wechatFilled from '@iconify-icons/ant-design/wechat-filled';
import whatsappFill from '@iconify-icons/akar-icons/whatsapp-fill';
import messageOutlined from '@iconify-icons/ant-design/message-outlined';
import flagForIndia from '@iconify-icons/emojione-v1/flag-for-india';
import flagForFlagUsOutlyingIslands from '@iconify-icons/twemoji/flag-for-flag-us-outlying-islands';
import flagForSouthAfrica from '@iconify-icons/emojione-v1/flag-for-south-africa';
import flagForUnitedArabEmirates from '@iconify-icons/emojione-v1/flag-for-united-arab-emirates';

const Footer = () => {
    return (
        <footer className="mkdf-page-footer">
            <div className="container">
                <div className="row">
                <div className="col-sm location">
                    <div className="tit">
                            LOCATIONS
                            </div>                            
                                <div id="ind">
                                    <p><h5>HQ India</h5></p>
                                    <div id="text">
                                        <p id="text">
                                        Pinnacle Tower, 1st Floor 101,
                                        A – 42/6, Sector 62 - 201301</p>
                                        <p>+91 120 4249642</p>  
                                        <p>+91-9310050021</p>   
                                    </div>
                                </div>
                                <div id="us">
                                    <p><h5>United States</h5></p>
                                    <div id="text">
                                        <p id="text">
                                        3897 Eunice Road, Jacksonville,
                                        Florida 32250</p>
                                    </div>
                                </div> 
                                <div id="sa">
                                    <p><h5>South Africa</h5></p>
                                    <div id="text">
                                        <p id="text">
                                        Johannesburg 2193,Parktown North</p>
                                    </div>
                                </div>
                                <div id="uae">
                                    <p><h5>UAE</h5></p>
                                    <div id="text">
                                        <p id="text">
                                        SERCON Building # 5, 2nd floor,
                                        Office No.3 P.O Box 29531,
                                        Riyadh - 11351</p>
                                    </div>
                                </div>
                                
                                    <span id="india" className="flags">
                                        <Icon icon={flagForIndia} width="28" height="28" />
                                    </span>
                                
                                 
                                <span id="united" className="flags">
                                    <Icon icon={flagForFlagUsOutlyingIslands} width="28" height="28" />
                                </span>

                                <span id="southafrica" className="flags">
                                    <Icon icon={flagForSouthAfrica} width="28" height="28" />                     
                                </span>

                                <span id="arab" className="flags">
                                <Icon icon={flagForUnitedArabEmirates} width="28" height="28" />                                        
                                </span>
                                                                                          
                    </div>
                        <div className="col-sm">
                    
                            <div className="tit">
                                ABOUT US
                            </div>
                                            <p><a className="industry-highlights__link" href="/portfolio" target="_self" id="content">Portfolios</a></p>
                                            <p><a className="industry-highlights__link" href="/#our-services" target="_self" id="content"> Services</a></p> 
                                            <p><a className="industry-highlights__link" href="/blog" target="_self" id="content">Blogs</a></p>
                                            <p><a className="industry-highlights__link" href="/contact" target="_self" id="content">Contact Us</a></p>
                            
                    </div>
                        <div className="col-sm">
                        
                            <div className="tit">
                                RESOURCES
                            </div>
                            
                                {/* <p><a className="industry-highlights__link" href="/about" target="_self" id="content">About Us</a></p> */}
                                <p><a className="industry-highlights__link" href="/privecy" target="_blank" rel="noreferrer" id="content"> Privacy Policy</a></p> 
                                <p><a className="industry-highlights__link" href="/termconditions" target="_blank" rel="noreferrer" id="content">Terms and Conditions</a></p>
                                <p><a className="industry-highlights__link" href="/cookiepolicy" target="_blank" rel="noreferrer" id="content"> Cookies Policy</a></p>   
                                          
                    </div>
                        <div className="col-sm">
                   
                            <div className="tit">
                                LIVE CHAT
                            </div>
                                    <p><Icon icon={messageOutlined} color="white" width="25" height="25" /><a className="industry-highlights__link" href="sms:919310050021" target="_blank" rel="noreferrer" id="content"> JsBlend</a></p>
                                    <p><Icon icon={whatsappFill} color="white" width="25" height="25" /><a className="industry-highlights__link" href="https://api.whatsapp.com/send?phone=919310050021" target="_blank" rel="noreferrer" id="content"> +91-9310050021</a></p>
                                    <p><Icon icon={wechatFilled} color="white" width="25" height="25" /><a className="industry-highlights__link" href="tel:+919310050021" target="_blank" rel="noreferrer" id="content"> +91-9310050021</a></p>  
                    </div>
                        <div className="col-sm">
                            <div className="tit">
                                INDUSTRIES
                            </div>
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=0YJXq7u0ZTw" target="_blank" rel="noreferrer" id="content"> Artificial Intelligence</a></p> 
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=YnLB49mrHe8" target="_blank" rel="noreferrer" id="content">Big Data</a></p>
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=E7v59IFVeho" target="_blank" rel="noreferrer" id="content"> Cloud</a></p> 
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=Gm5WgBmjTzk" target="_blank" rel="noreferrer" id="content">Hyper Automation</a></p>
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=ljpCPzcdD-A" target="_blank" rel="noreferrer" id="content">Internet of Things</a></p>
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=g33echT3el8" target="_blank" rel="noreferrer" id="content"> Microservices </a></p>                                     
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=eSj16RWdk2I" target="_blank" rel="noreferrer" id="content"> Mobile-Tech</a></p>
                                    <p><a className="industry-highlights__link" href="https://www.youtube.com/watch?v=FWDvBnqHIIY" target="_blank" rel="noreferrer" id="content"> More... </a></p> 
                    </div>      
                </div>
                <hr />
            </div>
            <div className="copyright header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 icon">
                            <p> © 2020-21 Copyright JsBlend.</p>
                        </div>
                        <div className="col-sm-4 icon">
                            <a className="foot_icon" href="https://www.facebook.com/jsBlendd" target="_blank" rel="noreferrer" > <img src="/img/facebook.png" style={{height:35, width:35}} alt=""/></a>
                            <a className="foot_icon" href=" https://www.instagram.com/jsblend/" target="_blank" rel="noreferrer" > <img src="/img/insta.png" style={{height:36, width:36}} className="border_insta" alt=""/></a>
                            <a className="foot_icon" href=" https://github.com/jsblend" target="_blank" rel="noreferrer" > <img src="/img/github.png" style={{height:35, width:35}} alt=""/></a>
                            <a className="foot_icon" href="https://twitter.com/blendjs" target="_blank" rel="noreferrer" rel="noopener noreferrer"> <img src="/img/twitter.png" style={{height:35, width:35}} alt=""/></a>
                            <a className="foot_icon" href="https://www.linkedin.com/in/js-blend-a810ba213" target="_blank" rel="noreferrer"> <img src="/img/linkedin.png" style={{height:35, width:35}} alt=""/></a>
                            <a className="foot_icon" href="https://medium.com/jsblend/" target="_blank" rel="noreferrer" > <img src="/img/medium.png" style={{height:35, width:35}} alt=""/></a>
                        </div>
                        <div className="col-sm-4 icon">
                        </div>
                    </div>
                </div>
                     
                </div>
        </footer>
    )
}

export default Footer;