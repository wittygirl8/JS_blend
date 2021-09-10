import React from 'react';
import "./contact.css";
import { Icon } from '@iconify/react';
import homeSolid from '@iconify-icons/clarity/home-solid';
import location16Filled from '@iconify-icons/fluent/location-16-filled';
import mail48Filled from '@iconify-icons/fluent/mail-48-filled';
import phoneFilled from '@iconify-icons/ant-design/phone-filled';
import Footer from '../../components/footer/foot';
import Header from '../../components/header/header';
import ScrollToTop from '../../components/scrollToTop';
import SideSocialMedia from '../../components/sideSocialMedia';
// // import React, { useState } from "react";
// import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon } from "google-maps-react";

const Contact = (props) => {
    return (
        <>
        <Header data="contact" />
        <SideSocialMedia />
        <ScrollToTop />
        <div className="ttm-page-title-row">
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                                <h1 className="title">Contact Us</h1>
                            </div>
                            <div className="breadcrumb-wrapper">
                                        <span>
                                            <a class="industry-highlights__link" style={{textDecoration: 'none', color: "black"}} title="Homepage" href="/">
                                                <Icon icon={homeSolid} color="rgba(10, 27, 65, 0.931)" width="15" height="15" />
                                            {"  "} <span>HOME</span>
                                            </a>
                                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contactBody">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="spacing-9">
                            <div className="section-title with-desc">
                                <div className="title-header">
                                    <h5>Come Visit Us At</h5>
                                    <h2 class="title">Our Address</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="featured-icon-box style2 left-icon icon-align-top">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                <div className="loc">
                                                    <Icon icon={location16Filled} color="white" width="32" height="32" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>Office Address</h5>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Pinnacle Tower, 1st Floor 101,
                                                    A – 42/6, Sector 62 - 201301</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="featured-icon-box style2 left-icon icon-align-top">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                <div className="loc">
                                                    <Icon icon={phoneFilled} color="white" width="32" height="32" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>Our Phone Number</h5>
                                            </div>
                                            <div className="featured-desc">
                                                <p>+91 120 4249642</p>
                                                    <p>+91-9310050021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="featured-icon-box style2 left-icon icon-align-top">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                <div className="loc">
                                                    <Icon icon={mail48Filled} color="white" width="32" height="32" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>Our Email</h5>
                                            </div>
                                            <div className="featured-desc">
                                                <p>info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 contact_form">
                        <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                <div className="ttm-bg-layer-inner"></div>
                                <div className="spacing-9 ttm-bgcolor-grey">
                                    <div className="section-title with-desc">
                                        <div className="title-header">
                                                <h5>Send Message</h5>
                                                <h2 className="title">Drop Us A Line</h2>
                                        </div>
                                    </div>
                                </div>
                                <form id="ttm-quote-form" className="ttm-quote-form ttm-bgcolor-grey row" method="POST">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input name="name" type="text" class="form-control bg-white" placeholder="Full Name*" required="" spellcheck="false" data-ms-editor="true"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone Number*" required="" class="form-control bg-white" spellcheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input name="address" type="text" placeholder="Email Address*" required="" class="form-control bg-white" spellcheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input name="subject" type="text" placeholder="Subject" required="" class="form-control bg-white" spellcheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <textarea name="Massage" rows={6} cols={100} placeholder="Write A Massage..." required=""  class="form-control bg-white message"spellcheck="false"></textarea>
                                        </div>                
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="text-left">
                                            <button type="submit" id="submit" class="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" value="true">Submit Quote</button>
                                        </div>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div> 
                                                          
                </div>
            </div>            
        </div>  
        {/* <div className="col-lg-12 beforeFooter">
                <Map
                    google={props.google}
                    style={{height: "50%", width: "100%"}}
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}
                    zoom={15}
                    // onClick={this.onMapClicked}
                /> 
                <Marker
                    // key={index}
                    position={{ lat: 40.854885, lng: -88.081807 }}
                    label={'Current Location'}
                    // name={item.name}
                    // onClick={handleMarkerClick}
                />   
        </div>       */}
        <Footer />          
        </>
    )
}
export default Contact;
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBspA_Rp_ZbqvC71S1lOelHgYVWj9AZZR0")
//   })(Contact)