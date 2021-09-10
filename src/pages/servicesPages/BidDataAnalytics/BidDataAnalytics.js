import React,  {useEffect, useState} from 'react'
import './BidDataAnalytics.css';
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";
import Tools from "../DescriptionImagePage/Tools";
import SideSocialMedia from '../../../components/sideSocialMedia';

function BidDataAnalytics() {
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
            <OurServicesHeading title = 'Big Data &amp; Analytics' content = "Remodeling your raw technical data towards clear business information." />
            
            <section>
                <div className = "container">
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-9 col-sm-12">                                  
                                    <img alt="Big Data and Analytics-Image001: Research, Development, Tactics &amp; PoC" className="picrnd" src="https://www.aeologic.com/assets/images/big-data-1-1.jpg"/>                                                                    
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2>Research, Development, Tactics &amp; PoC</h2>
                                        <p>Determine tactics for data governance, construction &amp;technology, preparation &amp;analytics. 
                                            Establish and implement PoC use case(s) for stamping/revoking the selected business data.</p>
                                        <h6>What all we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data strategy Consulting</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data Discovery</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                    <article  className="article">
                        <div className="row">   
                                {showSmallImg && <div className="col-lg-5 col-md-9 col-sm-12 ">                                  
                                    <img alt="Big Data and Analytics-Image002: Acquisition, Development, Analysis &amp; Execution " className="picrnd" src="https://www.aeologic.com/assets/images/big-data-3-1.jpg"/>                                                                
                                </div>}
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Acquisition, Development, Analysis &amp; Execution </h2>
                                        <p>Evoke and modify data from distinct sources, place it into the storage for querying and summary. 
                                            Discover how a business query can be solved with data. Gather data, design models, and obtain insights.
                                        </p>
                                        <h6>What we do</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data Preparation</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data Engineering</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data Insights</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY">Data Foresight</li>
                                        </ul>
                                    </div>                                
                                </div> 
                                {showLargeScreen && <div className="col-lg-5 col-md-9 col-sm-12">                                  
                                    <img alt="Big Data and Analytics-Image002: Acquisition, Development, Analysis &amp; Execution " className="picrnd" src="https://www.aeologic.com/assets/images/big-data-3-1.jpg"/>                                                                
                                </div> }                     
                        </div>
                    </article>
                    <article  className="article">
                        <div className="row">   
                                <div className="col-lg-5 col-md-9 col-sm-12">  
                                <span>
                                    <img alt="Big Data and Analytics-Image003: Big Data Process" className="picrnd" src="https://www.aeologic.com/assets/images/big-data-2-1.jpg"/>
                                </span>                                                                     
                                </div>
                                <div className="col-lg-5 col-md-8 col-sm-9">
                                    <div className="desc">
                                        <h2> Big Data Process </h2>
                                        <p>Determine the process of gathering, storing, extracting and synthesizing data (data architecture). 
                                        Obtain discovered insights available to decision-makers in a relevant format. Define particular actions to reshape specific behavior or results in the business domain.
                                        </p>
                                        <h6>What all we do:</h6>
                                        <ul>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Acquisition and Recording</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Extraction, Cleaning and Annotation</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Integration, Aggregation &amp; Representation</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Modeling and Analysis</li>
                                            <li class="styled-componets__ItemList-sc-1b5hdqw-8 ldBQpY" >Interpretation</li>
                                        </ul>
                                    </div>                                
                                </div>                            
                        </div>                        
                    </article>
                </div>
            </section>
            <section class="section Section-sc-1jp9o0i-0 gmJKDs" style={{paddingBottom: "10px"}}>
                <div class="Container-sc-3arkl6-0 bhiCFr aos-init aos-animate" data-aos="fade-up">
                    <div class="styled-componets__HeadExpertise-sc-1ntrm44-0 hRdBEn Heading-sc-178lehg-0 kfQNXn" style={{paddingBottom: "60px"}}>Our domain expertise</div>
                    <ol class="styled-componets__ListExpertise-sc-1ntrm44-1 dHUcV">
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Retail</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Transportation</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Real Estate</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Telecom</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Entertainment</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Finance</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Healthcare</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Energy &amp; Utility</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Bioinformatics</li>
                    </ol>
                </div>
            </section>
            <Tools title="Data managment tools we use" img1="https://www.aeologic.com/assets/images/logo/logo-42.jpg" img2="https://www.aeologic.com/assets/images/logo/logo-43.jpg" img3="https://www.aeologic.com/assets/images/logo/logo-44.jpg" img4="https://www.aeologic.com/assets/images/logo/logo-45.jpg" img5="https://www.aeologic.com/assets/images/logo/logo-46.jpg" img6="https://www.aeologic.com/assets/images/logo/logo-47.jpg"/>
            <ImagePage img1 = "https://www.aeologic.com/assets/images/shutterstock_365572922.jpg" img2="https://www.aeologic.com/assets/images/BI.jpg" img3="https://www.aeologic.com/assets/images/shutterstock_1016244037.jpg"/>    
            <ContactForm />
            <Footer />
        </>
    )
}
export default BidDataAnalytics;
