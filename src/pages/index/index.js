import React, {useEffect, useState} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/foot';
import image1 from '../../assets/img/single-img-one.png';
import Slider from 'react-slick';
import emailjs from 'emailjs-com';
import { Widget, addResponseMessage } from 'react-chat-widget';
import '../../../node_modules/react-chat-widget/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../assets/img/js-blend-logo-psnd-1.png';
import ContactForm from '../../components/contactForm/contact-form';
import ScrollToTop from '../../components/scrollToTop';
import SideSocialMedia from '../../components/sideSocialMedia';

require('./index.css');
const Index = () => {
    
    // const [settingsret, setSettings] = useState({});
    // const [projectSettings, setProjectSettings] = useState({});

    const settingsret = {
        infinite: true,
        slidesToShow: 3,
        autoplaySpeed: 1500,
        autoplay: true,
        slidesToScroll: 1,
        cssEase: 'linear',
        // variableWidth: true,
        // variableHeight: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
    const projectSettings = {
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        fade: true,
        autoplay: true,
        slidesToScroll: 1,
        cssEase: 'linear',
        mobileFirst:true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
    
    useEffect(() => {
        addResponseMessage('Welcome to this JsBlend chat!');
    }, [])
    
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        const templateParams = {
            to_name: 'JsBlend',
            from_name: 'New Visitor',
            message: newMessage
        };
        // const serviceId = 'service_8vmex2j'
        // const templateId = "template_32fmej5"
        emailjs.send('service_8vmex2j','template_32fmej5', templateParams, 'user_4bL9YMJK5FgxaAEasY77f')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
        // Now send the message throught the backend API
        addResponseMessage("We will respond you soon!!")
    };
    
    return (
        
        <div>
            <Header data="index" />
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="JsBlend"
                subtitle="Technology is best when it brings people together"
            />
            <ScrollToTop />
            <SideSocialMedia />
            <section className="section-1">

            </section>
            <section id="about-us">
                <div className=" section-title container" >
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                            <div className="clear-fix"> 
                                <div className="about-section">
                                    <h5 >About us</h5>
                                    <h2 className="title">
                                        We are a Top-Rated Development Company around the <span>Globe</span>. 
                                    </h2>
                                    <div className="border-bottom"></div>
                                </div>
                                <div className="section-desc">
                                    <p>
                                        Web designing in a powerful way of just not an only professions, however, in a passion for our Company.
                                        We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors. 
                                        And the smart design of any website is the starting point.
                                    </p>
                                    <p>
                                        We have a special team for website style who has been involved in designing professional websites of all categories.
                                    </p>
                                </div>
                                <div className="row no-gutter mt-4 section-list">
                                   <div className="col-lg-4 mobility-experience">
                                        <span>10+</span>
                                        <br />
                                        Years of Web Development Experience
                                   </div>
                                   <div className="col-lg-3 mobility-experience">
                                        <span>50+</span>
                                        <br />
                                        Web Experts
                                   </div>
                                   <div className="col-lg-3 mobility-experience">
                                        <span>70+</span>
                                        <br />
                                        Successful Applications
                                   </div>
                                </div>

                                <div className="enquiry">
                                    <span>Call to ask <span>any question</span> <a href="..">: 123-456-7890</a> or <a href="..">: 123-456-7890</a></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 about-img" >
                            <img src={image1} alt="..."/>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section id="our-services">
                <div className="section-service container">
                    <div className="row clear-fix">
                        <div className="col-lg-12 service-header"> 
                            <h5>Our Services</h5>
                            <h2 className="title">
                                We run all kinds of services in form of 
                                <span>Information &amp; Technologies</span>
                            </h2>
                        </div>
                    </div>
                    {/* <div className="row"> */}
                    <Slider {...settingsret}>
                        <div className="card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/RFID.png" alt="Card image" />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">RFID Solutions</h4>
                                <p className="card-text">Radio Frequency Identification commonly known as RFID, makes use of electromagnetic fields to automatically pinpoint and trail the label attached to Objects.</p>
                                <a href="/rfid" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className=" card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/application.jpg" alt="Card image" />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">Application/Web Development</h4>
                                <p className="card-text">Boost your business plans with customized applications.</p>
                                <a href="/application-development" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className=" card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/shutterstock_187137887.jpg" alt="Card image" />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">Research & Development</h4>
                                <p className="card-text">Innovation is essential for endurance. But innovation is inherently risky too. Our R&D specialists will lower out your associated risks by analyzing the technical feasibility, marketability, and scalability of your new product.</p>
                                <a href="/research-and-development" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className=" card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/shutterstock_559844623.jpg" alt="Card image" />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">Big Data & Analytics</h4>
                                <p className="card-text">Remodeling your raw technical data towards clear business information.</p>
                                <a href="/bigdata-analytics" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className=" card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/Support_Services.jpg" alt="Card image" />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">Support Services</h4>
                                <p className="card-text">Our support center achieves efficient and timely customer & full-fledged technical support. We can either support your existing team or contribute a completely innovative support team solutions.</p>
                                <a href="/support-services" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/shutterstock_613464041.jpg" alt="Card image"  />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">QA &amp; Software Testing</h4>
                                <p className="card-text">Deliver a more reliable product, reduce your time-to-market while supporting your client acceptance with Software Testing Services by AeoLogic.</p>
                                <a href="/qa-software-testing" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card border-info mb-3" style={{"width": "400px", height: "500px"}}>
                                <div className="card-img">
                                    <img className="card-img-top" src="https://www.aeologic.com/assets/images/BI.jpg" alt="Card image"  />
                                </div>
                                <div className="card-body">
                                <h4 className="card-title">Bots Development</h4>
                                <p className="card-text">Decrease your overhead costs and improve brand image through conversational interactions. We provide full lifecycle chatbot development from concept definition to publishing and support.</p>
                                <a href="/bot-development" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    {/* </div> */}
                </div>
            </section>
            <section id="portfolio">
                <div className="our-project container">
                    
                    <div className="row project-slide">
                        <Slider {...projectSettings}>
                            <div className="row d-flex" >
                                <div className="col-lg-6 img-container">
                                    <img src="/img/DpNotice-with-logo.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Delhi Traffic Police Notice</h2>
                                    <p>Delhi Traffic Police Notice is a sophisticated software application 
                                        comprising Android based mobile app and web interface, 
                                        developed for the purpose of providing an comprehensive solution 
                                        for Transport Enforcement Officers and Traffic Policemen. 
                                        This app-cumapplication is integrated with Vahan and Sarathi 
                                        applications and provides a number of user-friendly features 
                                        while covering all major functionalities of Traffic Enforcement System.</p>
                                </div>
                            </div>
                            <div className="row d-flex" >
                                <div className="col-lg-6 img-container">
                                    <img src="/img/RFID-with-logo.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>RFID Management System</h2>
                                    <p>With the rise in pollution, 
                                        it is very important to monitor the root cause of major pollutants. 
                                        We’ve worked on IoT based systems that will monitor the real-time data,
                                        sense the pollution levels and share the data to the command center. 
                                        Such solutions help in finding out the worst affected areas and right 
                                        action can be taken at the right time. This will help in taking care of our 
                                        environment which is at a very alarming stage.
                                        Get Case-Study.</p>
                                </div>
                            </div>
                            <div className="row d-flex" >
                                <div className="col-lg-6 img-container">
                                    <img src="/img/wedpost-with-logo.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Wedpost</h2>
                                    <p>Another example of a project with its respective description. 
                                        These sections work well responsively as well, try this theme on a small screen!</p>
                                </div>
                            </div>
                            <div className="row d-flex" style={{display: "flex"}}>
                                <div className="col-lg-6 img-container">
                                    <img src="/img/achieve-17.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Research Management System</h2>
                                    <p>We are innovation partner that contributes to the research and development of future cities. 
                                        We use science and technology to overcome urban challenges such as airborne emissions, 
                                        resource efficiency, traffic congestion, 
                                        the financing of basic services and the sustainability of infrastructure.</p>
                                </div>
                            </div>
                            <div className="row d-flex" style={{display: "flex"}}>
                                <div className="col-lg-6 img-container">
                                    <img src="/img/achieve-1.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Echallan System</h2>
                                    <p>e-Challan is a sophisticated software application comprising Android based mobile app and web interface, 
                                        developed for the purpose of providing an comprehensive solution for Transport Enforcement Officers
                                        and Traffic Policemen. 
                                        This app-cumapplication is integrated with Vahan and Sarathi applications and provides a
                                        number of user-friendly features while covering all major functionalities of Traffic 
                                        Enforcement System.</p>
                                </div>
                            </div>
                            <div className="row d-flex" style={{display: "flex"}}>
                                <div className="col-lg-6 img-container">
                                    <img src="/img/achieve-7.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Transport Management Solution(TMS)</h2>
                                    <p>Transport management solutions consist of various aspects like covering shipment order 
                                        management, planning, execution, documentation & billing( Hub Management). 
                                        Our solutions are designed to work across your multi-modal transport network & 
                                        manage all your key processes. This covers shipment order management, planning 
                                        the order based on VSRC (Vehicle, Schedule, Routes, and Constraints), load planning, 
                                        load consolidation, carrier selection, execution, documentation, and billing.</p>
                                </div>
                            </div>
                            <div className="row d-flex" style={{display: "flex"}}>
                                <div className="col-lg-6 img-container">
                                    <img src="/img/achieve-8.png" />
                                    
                                </div>
                                <div className="col-lg-6 project-name">
                                    <h2>Warehouse Management System(WMS)</h2>
                                    <p>Warehouse management system will be your choice of mode for the basic receipt-GR- 
                                        Put Away-Pick-Pack-Dispatch functions to advanced automation needs. 
                                        This consists of flexible Value-added Service, 
                                        lot management, serial number tracking, etc. 
                                        It uses sophisticated fulfillment logic for wave management, 
                                        constraint-based selection, real-time replenishment and eliminates costly 
                                        counts with auditor-approved counting functionality.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="our-process container">
                <div className="row clear-fix">
                     <div className="col-lg-12 our-process-heading"> 
                        <h5>Our Process</h5>
                        <h2 className="title">
                            Check out our work <span>Process</span>
                        </h2>
                    </div>
                </div>
                <div className="border-bottom"></div>
                <div className="">
                    <div className="row">
                        <div className="row steps-row">
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-one" title="step-one" src="http://themetechmount.net/react/altech/images/step-one.jpg" />
                                    <div className="process-num">
                                        <span className="number">01</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>You've an idea</h5>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-two" title="step-two" src="http://themetechmount.net/react/altech/images/step-two.jpg"/>
                                    <div className="process-num">
                                        <span className="number">02</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Let's Brainstrom</h5>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-three" title="step-three" src="http://themetechmount.net/react/altech/images/step-three.jpg" />
                                    <div className="process-num">
                                        <span className="number">03</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Choose a Service</h5>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center ">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-four" title="step-four" src="	http://themetechmount.net/react/altech/images/step-four.jpg"/>
                                    <div className="process-num">
                                        <span className="number">04</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Request a meeting </h5>
                                    </div>
                                    
                                </div>
                            </div>    
                        </div>
                        <br />
                        <div className="row">
                        <div className="col-md-3 col-sm-12 ttm-processbox text-center res-991-mb-0">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-four" title="step-four" src="http://themetechmount.net/react/altech/images/step-three.jpg"/>
                                    <div className="process-num">
                                        <span className="number">05</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>UI Design</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center res-991-mb-0">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-four" title="step-four" src="http://themetechmount.net/react/altech/images/step-three.jpg"/>
                                    <div className="process-num">
                                        <span className="number">06</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Web Devlopment</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center res-991-mb-0">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-four" title="step-four" src="https://cdn4.iconfinder.com/data/icons/software-13/100/app-launch-laptop-software-app-launch-rocket-startup-laptop-release-beta-stable-version-512.png"/>
                                    <div className="process-num">
                                        <span className="number">07</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Beta Release</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ttm-processbox text-center ">
                                <div className="ttm-box-image">
                                    <img className="img-fluid" alt="step-four" title="step-four" src="http://themetechmount.net/react/altech/images/step-three.jpg"/>
                                    <div className="process-num">
                                        <span className="number">08</span>
                                    </div>
                                </div>
                                <div className="featured-content-1">
                                    <div className="featured-title">
                                        <h5>Deploy it on live server</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="section-blog container">
                    <div className="row clear-fix">
                        <div className="col-lg-12 blog-header"> 
                            <h5 className="title">
                                <span>Our Blogs</span>
                            </h5>
                        </div>
                    </div>
                    <div className="row" id="blog">
                    <Slider {...settingsret}>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom ">
                        <a class="industry-highlights__link" href="https://medium.com/jsblend/one-click-fdac64fb6261" target="_blank" rel="noreferrer">
                                                                            <div className="containts">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/oneclick.png" className="image-content" alt="One Click"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overla overlaBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlaContent">One Click</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                <div className="overla2 overlaBottom2">
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom">
                            <a class="industry-highlights__link " href="https://medium.com/jsblend/crud-operation-c5ba129d72df" target="_blank" rel="noreferrer">
                                                                            <div className="containts ">
                                                                                    <div className="picture-content">
                                                                                        <picture>
                                                                                            <img src="/img/crud.png" className="image-content" alt="NodeJs CRUD Operation"/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overla overlaBottom">
                                                                                        <div className="text">
                                                                                                <h4 class="overlaContent">NodeJs CRUD Operation </h4>                                                                                    
                                                                                            </div>
                                                                                        </div>
                                                                                    <div className="overla2 overlaBottom2">                                                                                        
                                                                                    </div>                                                                                             
                                                                            </div>                                                                            
                                                                        </a>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom">
                        <div className="">
                        <a class="industry-highlights__link" href="https://medium.com/jsblend/social-media-login-using-nodejs-and-passportjs-be9b58cc359d" target="_blank" rel="noreferrer">
                                                                            <div className="containts">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/login.png" className="image-content" alt="Social Media Login Using NodeJs and PassportJs"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overla overlaBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlaContent">Social Media Login Using NodeJs and PassportJs</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                <div className="overla2 overlaBottom2">
                                                                                    
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                        </div>                            
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom">
                            <a class="industry-highlights__link" href="https://medium.com/jsblend/how-to-send-emails-with-templates-using-nodejs-176b72c1406d" target="_blank" rel="noreferrer">
                                                                            <div className="containts">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/sendemail.png" className="image-content" alt="Send Emails With Templates using NodeJs"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overla overlaBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlaContent">Send Emails With Templates using NodeJs</h4>                                                                                    
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overla2 overlaBottom2">
                                                                                    
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom">
                            <a class="industry-highlights__link" href="https://medium.com/jsblend/how-to-serve-static-resource-with-node-js-e86aa85b81c3" target="_blank" rel="noreferrer">
                                                                            <div className="containts">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/staticresource.png" className="image-content" alt="Serve Static Resource With Node.js"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overla overlaBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlaContent">Serve Static Resource With Node.js</h4>                                                                                    
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overla2 overlaBottom2">
                                                                                    
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 card-container bottom">
                            <a class="industry-highlights__link" href="https://medium.com/jsblend/image-upload-using-nodejs-16b1e804ec92" target="_blank" rel="noreferrer">
                                                                            <div className="containts">
                                                                                    <div className="picture-content">
                                                                                        <picture>
                                                                                            <img src="/img/uploadapi.png" className="image-content" alt="Image upload using NodeJs"/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overla overlaBottom">
                                                                                        <div className="text">
                                                                                                <h4 class="overlaContent">Image upload using NodeJs </h4>                                                                                    
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="overla2 overlaBottom2">
                                                                                    </div>                                                                         
                                                                            </div>                                                                            
                                                                        </a>
                        </div>
                    </Slider>
                    </div>
                </div>
            </section>
            <section id="contact">
                <ContactForm />
            </section>
            <Footer />
        </div>
        
        
    )
}

export default Index;