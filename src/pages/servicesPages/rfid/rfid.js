import React  from  "react";
import './rfid.css';
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import SideSocialMedia from '../../../components/sideSocialMedia';
const Rfid = () => {
    return (
        <div>
            <Header />
            <SideSocialMedia />
            <section className="banner-img">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title-box text-center">
                                <div className="rfid-heading">
                                    <h1 className="title">RFID Solutions</h1>
                                    <p>
                                        Radio Frequency Identification commonly known as RFID, 
                                        makes use of electromagnetic fields to automatically 
                                        pinpoint and trail the label attached to Objects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="rfid-description container">
                    <h1>RFID Solutions</h1>
                    <p>
                        Radio Frequency Identification commonly known as RFID, 
                        makes use of electromagnetic fields to automatically pinpoint and trail 
                        the label attached to objects. The RFID system generally consists of two 
                        parts—Tag and a Receiver. Tags are placed on the object that needs to identify 
                        and receiver is used to collect the information form placed Tags.
                    </p>
                    <h1>Types of RFID Tags</h1>
                    <h2>Fixed RFID Readers</h2>
                    <p>
                        Fixed RFID readers are specifically designed to meet high service standards and security 
                        in different business processes and standards. Fixed RFID Readers, as the name suggests, 
                        are fixed either at the entry gate /exit gate for monitoring people and vehicle movement.
                    </p>
                    <h2>
                        Metal Tags
                    </h2>
                    <p>
                        Metal tags are designed for both metal as well as non-metal objects and surfaces. 
                        The thin and flexible tag suits curved and flat surfaces and offers a possibility 
                        to create wonderful solution for end users. These tags are packaged within a hard shell 
                        to make it safe from impact, moisture and extreme temperatures.
                    </p>
                    <h1>Types of RFID Readers</h1>
                    <h2>Fixed RFID Readers</h2>
                    <p>
                        Fixed RFID readers are specifically designed to meet high service standards and security
                        in different business processes and standards.
                        Fixed RFID Readers, as the name suggests,
                        are fixed either at the entry gate /exit gate for monitoring people and vehicle movement.
                    </p>
                    <h2>Handheld RFID Readers</h2>
                    <p>
                        Handheld RFID readers are specifically used for reading the tags and labels 
                        with a wire or Bluetooth connecting the hardware to devices like mobile or computer 
                        for tracking the items. These type of RFID 
                        Readers are specifically used in the retail or warehouses or at heavy industries.
                    </p>
                    <h1>
                        Why Companies Are Adopting RFID Technology?
                    </h1>
                    <p>
                        RFID technology has been proven to be a helping hand in transforming businesses 
                        across a plethora of sectors like Manufacturing, Automobiles, 
                        Transportation, Healthcare and many more. In the current times, RFID 
                        Technology is very common in almost every possible industry. It simplifies the 
                        complicated work in a simple and flexible manner. In the last few years, RFID has 
                        been used by many industries that refused to adopt this technology earlier because 
                        they felt it was very costly but now it’s even cost effective so any small scale 
                        industry can also use RFID based tracking.
                    </p>
                    <h1>AeoLogic RFID Solutions</h1>
                    <p>
                        AeoLogic provides a wide range of RFID solutions for your business growth.
                        We offer advanced RFID tags, RFID Readers, RFID solution software, 
                        RFID printers and a lot more. AeoLogic provides all different types 
                        of RFID Solutions. We are having a highly professional team of RFID consultants 
                        who hold expertise in Business understanding, planning and strategies and also 
                        to support the cost effective evaluation and implementation of viable RFID systems.
                    </p>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </div>
    )
};

export default Rfid;