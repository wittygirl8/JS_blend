import React,  {useEffect, useState}  from 'react'
import './QASoftwareTesting.css'
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";
import Tools from "../DescriptionImagePage/Tools";
import SideSocialMedia from '../../../components/sideSocialMedia';

function QASoftwareTesting(){
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
            <SideSocialMedia />
            <OurServicesHeading title = 'QA &amp; Software Testing' content = "Deliver a more reliable product, reduce your time-to-market while supporting your client acceptance with Software Testing Services by AeoLogic."/>
            

            <section>
                <div className = "container">
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-9 col-sm-12">                                  
                                    <img alt="QA and Software Testing-Image001: Manual QA" className="picrnd" src="https://www.aeologic.com/assets/images/qa-3.jpg"/>                                                                    
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2>Manual QA</h2>
                                        <p>We pretend to be the end-user, testing product features to ensure that they must behave as designed to be.
                                        </p>
                                        <h6>Our Services:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Analyze Tactics</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Operative Manual Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Test Design</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Web, Mobile Application Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Cross-browser, cross-platform, UI and Localization Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Integration Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Smoke, Regression Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">QA Education Services</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                                {showSmallImg && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="QA and Software Testing-Image002: QA Automation" className="picrnd" src="https://www.aeologic.com/assets/images/qa-2.jpg"/>                                                               
                                </div>}
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> QA Automation </h2>
                                        <p>Optimize and interpret routine testing with the least set of scripts.
                                        </p>
                                        <h6>What we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Automation Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Evaluation of Existing Automation Framework and Processes</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Proof-of-Concept</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Automation Services for Web Apps/Mobile Apps/API Testing</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="QA and Software Testing-Image002: QA Automation" className="picrnd" src="https://www.aeologic.com/assets/images/qa-2.jpg"/>                                                         
                                </div> }                  
                        </div>
                    </article>
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-8 col-sm-12">  
                                <span>
                                    <img alt="QA and Software Testing-Image003: Security QA" className="picrnd" src="https://www.aeologic.com/assets/images/qa-1.jpg"/>
                                </span>                                                                     
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Security QA </h2>
                                        <p>Assure that your software product can withstand malicious intrusions.
                                        </p>
                                        <h6>What we deal with:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Penetration Testing of PCI DSS Compliance audit scope</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Source Code Analysis</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Secure SDLC Implementation</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Security Education for QA Engineers and/or Developers</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Infrastructure Security Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Web Services / API Security Testing</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Social Engineering Attacks Security Testing</li>
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
                                        <h2> Arising Technologies </h2>
                                        <p>AeoLogic specialists will guide you in providing the best customer experiences with online chatbots, in switching to fringe computing to analyze data and respond to it in real-time, and in optimizing the production processes with the help of smart bots.
                                        </p>
                                        <h6>What we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Supporting in establishing objectives NFR: types, sources, conditions, values</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Consulting on setup/improvement of Performance Framework and Process</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Proof-of-Concept for the possibility of Performance/Load Framework Implementation</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Performance Testing Education</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Initial Cycle of Load Testing Services</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Performance/Capacity/Stress/Endurance/Volume Testing</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-5 col-md-8 col-sm-12">                                  
                                    <img alt="QA and Software Testing-Image004: Arising Technologies" className="picrnd" src="https://www.aeologic.com/assets/images/bitmap4-min.jpg"/>                                                         
                                </div> }                          
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-8 col-sm-12">  
                                <span>
                                    <img alt="QA and Software Testing-Image005: QA Consulting" className="picrnd" src="https://www.aeologic.com/assets/images/bitmap3-min.jpg"/>
                                </span>                                                                     
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> QA Consulting </h2>
                                        <p>We bring your QA strategy towards the line with the industry patterns and enhance team productivity.</p>
                                        <h6>What we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >QA Scrutiny</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Classification of areas for development</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Roadmap for implementation with priorities</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >QA consulting</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >QA Manager provides services to manage client’s quality assurance methods and testing experts</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                </div>
            </section>
            <section class="section Section-sc-1jp9o0i-0 gmJKDs">
            <div class="styled-componets__ContainerStatistics-f6785u-0 eQkdKM Container-sc-3arkl6-0 bhiCFr">
                <div class="styled-componets__HeadingStatistics-f6785u-1 ToSOV Heading-sc-178lehg-0 kfQNXn">Testing
                    services in numbers</div>
                <div class="js-model-statistics-list styled-componets__ListStatistics-f6785u-3 fkYLdo animate aos-init aos-animate" data-aos="fade-up">
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">
                            400+</dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>projects
                                    completed</span></dd>
                    </dl>
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">18
                        </dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>verticals
                                    covered</span></dd>
                    </dl>
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">
                            69%</dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>of clients’ costs
                                    saved</span></dd>
                    </dl>
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">
                            88%</dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>of clients’ time
                                    saved</span></dd>
                    </dl>
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">
                            20,000</dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>hours team capacity
                                    per month</span></dd>
                    </dl>
                    <dl class="styled-componets__ItemStatistics-f6785u-2 keGoax">
                        <dt class="Heading-sc-178lehg-0 eGkdKa styled-componets__TitleStatistics-f6785u-4 eLncPW">
                            60+</dt>
                        <dd class="styled-componets__DetailsStatistics-f6785u-5 cbJvwM"><span>testing
                                    services</span></dd>
                    </dl>
                </div>
            </div>
        </section>
        <ImagePage img1 = "https://www.aeologic.com/assets/images/shutterstock_424677625.jpg" img2="https://www.aeologic.com/assets/images/shutterstock_613464041.jpg" img3="https://www.aeologic.com/assets/images/shutterstock_187137887.jpg"/>    
        <Tools title="Awards &amp; Certifications" img1="https://www.aeologic.com/assets/images/logo/logo-28.png" img2="https://www.aeologic.com/assets/images/logo/logo-29.png" img3="https://www.aeologic.com/assets/images/logo/logo-30.png" img4="https://www.aeologic.com/assets/images/logo/logo-31.png" img5="https://www.aeologic.com/assets/images/logo/logo-32.png" img6="https://www.aeologic.com/assets/images/logo/logo-33.png"/>
            <ContactForm />
            <Footer />
        </>
    )
}
export default QASoftwareTesting;