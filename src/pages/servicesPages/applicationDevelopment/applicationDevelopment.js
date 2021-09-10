import React, {useEffect, useState} from "react";
import './applicationDevelopment.css';
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";
import SideSocialMedia from '../../../components/sideSocialMedia';
const ApplicationDevelopment = () => {
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
        <div>
            <Header />
            <SideSocialMedia />
            <section className="application-banner-img">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title-box text-center">
                                <div className="application-heading">
                                    <h1 className="title">Application Development</h1>
                                    <p>
                                        Boost your business plans with customized applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="application-description container">
                <div className="row">
                    <div className="col-lg-5 ui-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>
                    <div className="col-lg-7 ui-description pl-8">
                        <h1>Creative UX/UI designs for creating the best first-time user experience.</h1>
                        <p>
                            We implement hours to create the best digital experiences for solving complex 
                            challenges faced by the business.
                        </p>
                        <h2>
                            What we serve:
                        </h2>
                        <ul className="ui-list">
                            <li>Analysis and tactics</li>
                            <li>Visual UI design and interaction</li>
                            <li>Prototyping</li>
                            <li>Testing and developments</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="application-description container">
                <div className="row">
                    {showSmallImg && <div className="col-lg-5 ecommerce-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>}
                    <div className="col-lg-7 ui-description ecommerce-para">
                        <h1>Immersive eCommerce solutions & digital commerce platforms</h1>
                        <p>
                            We enable brands & retailers to innovate and grow rapidly 
                            since we provide the best eCommerce platforms and flexible cloud solutions.
                        </p>
                        <h2>
                            How we do it:
                        </h2>
                        <ul className="ui-list">
                            <li>Advancement of e-Commerce online stores</li>
                            <li>Review of e-Commerce online stores</li>
                            <li>Store migration to Magento 2 platform</li>
                            <li>Alliances with 3-rd party systems</li>
                            <li>Constant integration and Perpetual deployment.</li>
                        </ul>
                    </div>
                    {showLargeScreen&& <div className="col-lg-5 ecommerce-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>}
                </div>
            </section>
            <section className="application-description container">
                <div className="row">
                    <div className="col-lg-5 erp-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>
                    <div className="col-lg-7 pl-8 ui-description">
                        <h1>Business software, ERP and CRM solutions.</h1>
                        <p>
                            With substantial project management experience, sharp skills, and proved competencies 
                            our engineers consistently 
                            deliver innovative products and their solutions so that your established goals can be met.
                        </p>
                        <h2>
                            What we do:
                        </h2>
                        <ul className="ui-list">
                            <li>REST API Extension</li>
                            <li>Design and Build Microservices with secure messaging</li>
                            <li>High load systems</li>
                            <li>Constant integration and Perpetual deployment</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="application-description container">
                <div className="row">
                    {showSmallImg && <div className="col-lg-5 development-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>}
                    <div className="col-lg-7 ui-description development-para">
                        <h1>Mobile applications for iOS and Android</h1>
                        <p>
                            We use the best modern technologies, innovative approaches, 
                            up to date constructing mobile applications which results in beautiful and apps.
                        </p>
                        <h2>
                            What we do:
                        </h2>
                        <ul className="ui-list">
                            <li>Native or cross-platform mobile application development</li>
                            <li>MVP development</li>
                            <li>Complex development with 3-party amalgamations</li>
                            <li>Applications with Augmented Reality traits</li>
                            <li>Apps with wearables and smart home products integration.</li>
                        </ul>
                    </div>
                    {showLargeScreen && <div className="col-lg-5 development-image">
                        {/* <img src="/img/UX-UI-designs.jpg" /> */}
                    </div>}
                </div>
            </section>
            
            <ImagePage img1 = "/img/shutterstock_528831091.jpg" img2="/img/shutterstock_572651239.jpg" img3="/img/shutterstock_1324524026.jpg"/>
            <ContactForm />
            <Footer />
        </div>
    )
};

export default ApplicationDevelopment;