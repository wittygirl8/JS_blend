import React from 'react';
import './contact-form.css';
const ContactForm = () => {
    return (
        <section>
                <div className="contact-us container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-heading">
                                <h1>Request a Quote</h1>
                            </div>
                            <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="name" type="text" className="form-control bg-white" placeholder="Full Name*" required="" spellCheck="false" data-ms-editor="true"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone Number*" required="" className="form-control bg-white" spellCheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="address" type="text" placeholder="Email Address*" required="" className="form-control bg-white" spellCheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input name="subject" type="text" placeholder="Subject" required="" className="form-control bg-white" spellCheck="false" data-ms-editor="true"/>
                                        </div>                
                                    </div>
                                </div>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="Massage" rows={6} cols={100} placeholder="Write A Massage..." required=""  className="form-control bg-white message"spellCheck="false"></textarea>
                                        </div>                
                                    </div>
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <button type="submit" id="submit" className="mt-3 btn-secondary ttm-btn ttm-btn-size-md " value="true">Submit Quote</button>
                                        </div>
                                    </div> 
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contactinfo">
                            <h3 style={{"fontSize": "23px", "color": "#fff", "fontWeight": "600"}}>
                                SALES/PROJECT INQUIRIES
                            </h3>
                            <p>
                                <i className="fa fa-envelope" style={{"fontSize": "20px", "color": "#fff"}} aria-hidden="true"></i>
                                <a href="mailto:support@aeologic.com" target="_blank" rel="noopener noreferrer"><span style={{"color": "#fff", "fontSize": "16px"}}>  support@aeologic.com</span>
                                </a>
                            </p>
                            <p>
                                <i className="fa fa-skype" style={{"fontSize": "20px", "color": "#fff"}} aria-hidden="true"></i>
                                <a href="skype:Flutterdevs?chat"><span style={{"color": "#fff", "fontSize": "16px"}}>   JS Blend</span>
                                </a>
                            </p>
                            <p>
                                <i className="fa fa-phone" style={{"fontSize": "20px", "color": "#fff"}} aria-hidden="true"></i>
                                <a href="tel:+91 120 4249642"><span style={{"color": "#fff", "fontSize": "16px"}}> +91 120 4249642, +91-9310050021</span>
                                </a>
                            </p>
                            <p>
                                <i className="fa fa-whatsapp" style={{"fontSize": "20px", "color": "#fff"}} aria-hidden="true"></i>
                                <a href="https://api.whatsapp.com/send?phone=919310050021"><span style={{"color": "#fff", "fontSize": "16px"}}> +91-9310050021</span>
                                </a>
                            </p>
                            <p>&nbsp;</p>
                            <h3 style={{"fontSize": "23px", "color": "#fff", "fontWeight": "600"}}>
                                CAREER INQUIRIES
                            </h3>
                            <p>
                                <i className="fa fa-envelope" style={{"fontSize": "20px", "color": "#fff"}} aria-hidden="true"></i> 
                                <a href="mailto:hr@flutterdevs.com" target="_blank" rel="noopener noreferrer"><span style={{"color": "#fff", "fontSize": "16px"}}> hr@flutterdevs.com</span></a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactForm;