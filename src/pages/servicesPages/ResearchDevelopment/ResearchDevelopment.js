import React,  {useEffect, useState}  from 'react'
import './r-n-d.css';
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";

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
            <OurServicesHeading title = 'Research &amp; Development' content = "Innovation is essential for endurance. 
                                                                            But innovation is inherently risky too. 
                                                                            Our R&amp;D specialists will lower out your associated risks by analyzing the 
                                                                            technical feasibility, marketability, and scalability of your new product."/>
            

            <section>
                <div className = "container">
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-9 col-sm-12">                                  
                                    <img alt="Research and Devlopment-Image001: Internet of Things" className="picrnd" src="/img/Internet_of_Things.jpg"/>                                                                    
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2>Internet of Things </h2>
                                        <p>Stimulate chance to market by bringing our expertise at work in industrial design, UX, and IoT engineering.
                                           AeoLogic has worldwide IoT practice in Silicon Valley and hi-tech development centers in Eastern Europe.
                                        </p>
                                        <h6>What we are known for:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Expertise Design</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">System Configuration</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Hardware Prototyping</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">IoT Platforms Development</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">  
                        {showSmallImg && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="QA and Software Testing-Image004: Arising Technologies" className="picrnd" src="https://www.aeologic.com/assets/images/bitmap4-min.jpg"/>                                                               
                                </div>} 
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Artificial Intelligence and Deep Learning </h2>
                                        <p>Unite the benefits of human knowledge and computer processor. 
                                            We will help you with our working experiences and insights to automate complex processes for your business.
                                        </p>
                                        <h6>How we do it:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Deep Learning, Machine Learning</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Image &amp; Video Processing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Time Series Processing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Natural Language Processing</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="Research and Devlopment-Imag001: " className="picrnd" src="/img/Artificial_Intelligence_and_Deep_Learning.jpg"/>                                                                                                
                                </div> }                      
                        </div>
                    </article>
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-8 col-sm-12">  
                                <span>
                                    <img alt="Research and Devlopment-Imag002: Blockchain_Development" className="picrnd" src="/img/Blockchain_Development.jpg"/>
                                </span>                                                                     
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Blockchain Development </h2>
                                        <p>We have blockchain experts who will lead you with this technology to automate the financial processes saving millions of dollars. 
                                            The long paperwork and the approval processes are digitized making the supply chain efficient and transparent.
                                        </p>
                                        <h6>What all we provide:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Smart contracts</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Supply chains</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                        {showSmallImg && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                <img alt="Research and Devlopment-Imag003: Arising_Technologies" className="picrnd" src="/img/Arising_Technologies.jpg"/>
                                </div>}
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Arising Technologies </h2>
                                        <p>AeoLogic specialists will guide you in providing the best customer experiences with online chatbots, in switching to fringe computing to analyze data and respond to it in real-time, and in optimizing the production processes with the help of smart bots.
                                        </p>
                                        <h6>What we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Commercial UAVs (drones)</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Implicit Assistants (bots)</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Edge Computing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Smart Robots</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="Research and Devlopment-Imag003: Arising_Technologies" className="picrnd" src="/img/Arising_Technologies.jpg"/>
                                </div> }                         
                        </div>                        
                    </article>
                </div>
            </section>
        <ImagePage img1 = "https://www.aeologic.com/assets/images/shutterstock_1414968782.jpg" img2="https://www.aeologic.com/assets/images/shutterstock_187137887.jpg" img3="https://www.aeologic.com/assets/images/shutterstock_613464041.jpg"/>    
            <section class="section Section-sc-1jp9o0i-0 gmJKDs" style={{paddingBottom: "10px"}}>
                <div class="Container-sc-3arkl6-0 bhiCFr aos-init aos-animate" data-aos="fade-up">
                    <div class="styled-componets__HeadExpertise-sc-1ntrm44-0 hRdBEn Heading-sc-178lehg-0 kfQNXn" style={{paddingBottom: "60px"}}>Our domain expertise</div>
                    <ol class="styled-componets__ListExpertise-sc-1ntrm44-1 dHUcVU">
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Health Care &amp; Life Sciences</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Retail &amp; Consumer Goods</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Industrial &amp; Agriculture</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Transport &amp; Logistics</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Financial Services</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Travel &amp; Hospitality</li>
                    </ol>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </>
    )
}

export default ResearchDevelopment;
