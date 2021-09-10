import React, {useEffect, useState} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/foot';
import Slider from 'react-slick';
import ScrollToTop from '../../components/scrollToTop';
import SideSocialMedia from '../../components/sideSocialMedia';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
const About = () => {
    const [settings, setSettings] = useState({})
    useEffect(() => {

        setSettings({
            infinite: true,
            slidesToShow: 3,
            autoplaySpeed: 1500,
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
            ]
        })
        
    }, [])
    return (
        <div>
            <Header data="about" />
            <ScrollToTop />
            <section className="about-section-1">
            </section>
            <section className="aboutus container">
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-sm-12 about-img">
                        <img src="/img/single-img-nine.jpg" />
                        <div className="projects-number">
                            <h1>50 +</h1>
                            <h5>Successful Project</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                            <div className="clear-fix container"> 
                                <div className="about-section">
                                    <h5 >About us</h5>
                                    <h2 className="title">
                                        Product/Website development for better <span>Business</span>
                                    </h2>
                                    <div className="border-bottom"></div>
                                </div>
                                <div className="section-desc">
                                    <p>
                                        High-tech industries play an important role in the modern economy, 
                                        and often experience significantly higher pay than other industries.
                                        And Digital solutions have transformed the world’s web applications.
                                    </p>
                                </div>
                                <div className="row development">
                                    <div className="col-lg-12">
                                        <div className="box">
                                            <div className=" develop-img">
                                                <img src="/img/developing.png" />
                                            </div>
                                            <div className="">
                                                <h4>DevOps Development</h4>
                                                <div className="section-desc">
                                                <p>
                                                    Our firm is expert to create an efficient user interface that
                                                    makes user interaction is lively and run digital applications.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row software">
                                    <div className="col-lg-12">
                                        <div className="box">
                                            <div className="develop-img">
                                                <img src="/img/algorithms.png" />
                                            </div>
                                            <div className="">
                                                <h4>Automated Software</h4>
                                                <div className="section-desc">
                                                    <p>
                                                        Statistical analysis to help an organization to gain insights from large information for web optimal platform to develop.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            {/* <h1>About</h1> */}
            <section className="section-why-jsblend container">
                <div className="row clear-fix no-gutter">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="bg-img">
                            <div className="image-one">
                                {/* <img src="http://themetechmount.net/react/altech/images/bg-image/col-bgimage-1.jpg" /> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 bg-div   z-9">
                        <div className="description ttm-right-span">
                            <div className="spacing-1">
                                <div className="position-relative clearfix">
                                    <div className="title-header">
                                        <h5>Why JsBlend</h5>
                                        <h2 className="title-1">
                                            We deal with the aspects of professional <span className="ttm-textcolor-white">IT Services</span>
                                        </h2>
                                        <div className="border-bottom-1"></div>
                                    </div>
                                    <div className="title-desc">
                                        <p>
                                            Our IT services converge business and technology experts to help to manage business processes of all categories.
                                        </p>
                                    </div>
                                    <div className="product-design mt-40">
                                        {/* <div className="col-12"> */}
                                            {/* <div className="featured-icon-box style2 left-icon icon-align-top"> */}
                                                <div className="featured-icon">
                                                    <img src="/img/product-design.png" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Product Designs</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>
                                                            Our firm is expert to create an efficient user interface that makes user interaction is lively.
                                                        </p>
                                                    </div>
                                                </div>
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="product-design mt-40">
                                        {/* <div className="col-12"> */}
                                            {/* <div className="featured-icon-box style2 left-icon icon-align-top"> */}
                                                <div className="featured-icon">
                                                    <img src="/img/data-analysis.png" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Big Data & Analytics</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>
                                                        Statistical analysis to help an organization to gain insights from large information web sets.
                                                        </p>
                                                    </div>
                                                </div>
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="product-design mt-40">
                                        {/* <div className="col-12"> */}
                                            {/* <div className="featured-icon-box style2 left-icon icon-align-top"> */}
                                                <div className="featured-icon">
                                                    <img src="/img/maintenance.png" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Maintain App Data</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>
                                                        We Create the optimal platform to develop and run digital applications for our clients app.
                                                        </p>
                                                    </div>
                                                </div>
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="client-section mt-180 container">
                    <Slider {...settings}>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-1.png" width="70%"/>
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-2.jpg" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-9.png" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-11.jpg" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-13.jpg" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-10.png" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-12.png" width="70%" />
                        </div>
                        <div style={{width: "70%"}}>
                            <img src="/img/logo-14.png" width="70%" />
                        </div>
                    </Slider>
                </div>
            </section>
            <section className=" footer clearfix">
                <Footer />
            </section>
        </div>
    )
}

export default About;