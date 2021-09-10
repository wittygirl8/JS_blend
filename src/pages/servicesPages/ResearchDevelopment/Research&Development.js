import React, {useEffect, useState} from 'react'
import './r-n-d.css';
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";

const ResearchDevelopment = () => {
    const [showSmallImg, setShowSmallImg] = useState(false);
    const [showLargeScreen, setShowLargeScreen] = useState(true)
    
    useEffect (() => {
        window.addEventListener('resize', listenScrollEvent);
        
        if (window.innerWidth <= 1000) {
            return   setShowSmallImg(true) || setShowLargeScreen(false)
        } else {
            return  setShowSmallImg(false) || setShowLargeScreen(true)
        }
    }, []);
    const listenScrollEvent = (event) => {
        if (window.innerWidth <= 1000) {
            return   setShowSmallImg(true) || setShowLargeScreen(false)
        } else {
            return  setShowSmallImg(false) || setShowLargeScreen(true)
        }
      }
    return (        
        <>
            <Header />
            <OurServicesHeading title = 'Research & Development' content = "Innovation is essential for endurance. 
                                                                            But innovation is inherently risky too. 
                                                                            Our R&D specialists will lower out your associated risks by analyzing the 
                                                                            technical feasibility, marketability, and scalability of your new product."/>
            <section>
                <div className = "container">
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-4 col-md-4 col-sm-4">                                  
                                    <img className="picrnd" src="/img/Internet_of_Things.jpg"/>                                                                    
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="desc">
                                        <h2>Internet of Things </h2>
                                        <p>Stimulate chance to market by bringing our expertise at work in industrial design, UX, and IoT engineering.
                                           AeoLogic has worldwide IoT practice in Silicon Valley and hi-tech development centers in Eastern Europe.
                                        </p>
                                        <h6>What we are known for:</h6>
                                        <ul>
                                            <li>- Expertise Design</li>
                                            <li>- System Configuration</li>
                                            <li>- Hardware Prototyping</li>
                                            <li>- IoT Platforms Development</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                                {showSmallImg && <div className="col-lg-4 col-md-4 col-sm-4 ">                                  
                                    <img className="picrnd" src="/img/Artificial_Intelligence_and_Deep_Learning.jpg"/>                                                                
                                </div>}
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="desc">
                                        <h2> Artificial Intelligence and Deep Learning </h2>
                                        <p>Unite the benefits of human knowledge and computer processor. 
                                            We will help you with our working experiences and insights to automate complex processes for your business.
                                        </p>
                                        <h6>How we do it:</h6>
                                        <ul>
                                            <li>- Deep Learning, Machine Learning</li>
                                            <li>- Image & Video Processing</li>
                                            <li>- Time Series Processing</li>
                                            <li>- Natural Language Processing</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-4 col-md-4 col-sm-4">                                  
                                    <img className="picrnd" src="/img/Artificial_Intelligence_and_Deep_Learning.jpg"/>                                                                
                                </div> }                      
                        </div>
                    </article>
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-4 col-md-4 col-sm-4">  
                                <span>
                                    <img className="picrnd" src="/img/Blockchain_Development.jpg"/>
                                </span>                                                                     
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="desc">
                                        <h2> Blockchain Development </h2>
                                        <p>We have blockchain experts who will lead you with this technology to automate the financial processes saving millions of dollars. 
                                            The long paperwork and the approval processes are digitized making the supply chain efficient and transparent.
                                        </p>
                                        <h6>What all we provide:</h6>
                                        <ul>
                                            <li>- Smart contracts</li>
                                            <li>- Supply chains</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                                {showSmallImg && <div className="col-lg-4 col-md-4 col-sm-4">  
                                    <span>
                                        <img className="picrnd" src="/img/Arising_Technologies.jpg"/>
                                    </span>                                                                     
                                </div>  }
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="desc">
                                        <h2> Arising Technologies </h2>
                                        <p>AeoLogic specialists will guide you in providing the best customer experiences with online chatbots, in switching to fringe computing to analyze data and respond to it in real-time, and in optimizing the production processes with the help of smart bots.
                                        </p>
                                        <h6>What we do:</h6>
                                        <ul>
                                            <li>- Commercial UAVs (drones)</li>
                                            <li>- Implicit Assistants (bots)</li>
                                            <li>- Edge Computing</li>
                                            <li>- Smart Robots</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-4 col-md-4 col-sm-4">  
                                <span>
                                    <img className="picrnd" src="/img/Arising_Technologies.jpg"/>
                                </span>                                                                     
                                </div> }                          
                        </div>                        
                    </article>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </>
    )
}

export default ResearchDevelopment;
