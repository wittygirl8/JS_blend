import React from 'react'
import './BotDevelopment.css'
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";
import SideSocialMedia from '../../../components/sideSocialMedia';
function BotDevelopment(){
    return (
        <>
            <Header />
            <SideSocialMedia />
            <OurServicesHeading title = 'Bots Development.' content = "Decrease your overhead costs and improve brand image through conversational interactions. We provide full lifecycle chatbot development from concept definition to publishing and support" />
            
            <section class="section styled-components__HelpSection-sc-1bau9us-0 djfbAA Section-sc-1jp9o0i-0 epWclf">
                <div class="Container-sc-3arkl6-0 bhiCFr">
                    <div class="styled-components__TitleSection-sc-1bau9us-1 eyJsNM Heading-sc-178lehg-0 kfQNXn">How we
                        help:</div>
                    <ol class="styled-components__HelpList-sc-1bau9us-2 dgUWOj">
                        <li class="styled-components__ItemList-sc-1bau9us-3 fLZeAJ">
                            <div class="styled-components__InnerWrap-sc-1bau9us-4 dvlyvj"><span class="styled-components__Title-sc-1bau9us-5 dCkeMZ"><span>Enhance the user
                                            experience</span> through conversational interactions to become streamlined,
                                        intuitive and engaging, meaning a lift in conversion</span></div>
                        </li>
                        <li class="styled-components__ItemList-sc-1bau9us-3 fLZeAJ">
                            <div class="styled-components__InnerWrap-sc-1bau9us-4 dvlyvj"><span class="styled-components__Title-sc-1bau9us-5 dCkeMZ"><span>Lower overhead
                                            cost,</span> increasing a business’ profit margin. Your customer service
                                        representatives will be able to spend more time resolving complex issues</span>
                            </div>
                        </li>
                        <li class="styled-components__ItemList-sc-1bau9us-3 fLZeAJ">
                            <div class="styled-components__InnerWrap-sc-1bau9us-4 dvlyvj"><span class="styled-components__Title-sc-1bau9us-5 dCkeMZ"><span>Improve the user’s image
                                            of the brand</span> and establish a path for business growth. Chatbots enable
                                        your brand to provide unique experiences that weren't possible before</span></div>
                        </li>
                        <li class="styled-components__ItemList-sc-1bau9us-3 fLZeAJ">
                            <div class="styled-components__InnerWrap-sc-1bau9us-4 dvlyvj"><span class="styled-components__Title-sc-1bau9us-5 dCkeMZ">You will be able to use your
                                        chatbot in creative ways to <span>offer experiences</span> that keep customers
                                        coming back</span></div>
                        </li>
                    </ol>
                </div>
            </section>

            <section class="section Section-sc-1jp9o0i-0 gmJKDs">
                <div class="Container-sc-3arkl6-0 bhiCFr">
                    <div class="Heading-sc-178lehg-0 kfQNXn">How we do:</div>
                    <div class="DiagramPicture-mb2842-0 kOkeaW">
                        <picture>
                            <img className="bot_pic" src="https://www.aeologic.com/assets/images/chatbot_scheme_full_EN.svg" alt="Chatbot Development scheme"/>
                        </picture>
                    </div>
                </div>
            </section>
            <ImagePage img1 = "https://www.aeologic.com/assets/images/shutterstock_365572922.jpg" img2="https://www.aeologic.com/assets/images/BI.jpg" img3="https://www.aeologic.com/assets/images/shutterstock_1016244037.jpg"/>
            <section class="section styled-components__CertificationsSection-x2nx2g-0 eBpPWb Section-sc-1jp9o0i-0 doTvsL">
            <div class="AnchorScrollTo-sc-1pj4e2o-0 cDtlua"></div>
            <div class="Container-sc-3arkl6-0 bhiCFr">
                <div class="Heading-sc-178lehg-0 kfQNXn">Tools we use</div>
                <div class="styled-components__ContainerCertifications-x2nx2g-1 cvmolB">
                    <div class="styled-components__CatalogCertifications-x2nx2g-4 dehwSN">
                        <ol class="styled-components__Certifications-x2nx2g-5 dlCqmF">
                            <li class="styled-components__TypeCertificate-x2nx2g-7 fDZwou" title="">
                                <div class="styled-components__ImageCertificate-x2nx2g-8 iZAJRJ"><img class="styled-components__LogoCertificate-x2nx2g-9 dmcaPP" src='https://www.aeologic.com/assets/images/bp-logo-update.svg' alt=""/>
                                </div>
                            </li>
                            <li class="styled-components__TypeCertificate-x2nx2g-7 fDZwou" title="">
                                <div class="styled-components__ImageCertificate-x2nx2g-8 iZAJRJ"><img class="styled-components__LogoCertificate-x2nx2g-9 dmcaPP" src='https://www.aeologic.com/assets/images/uip-work-ahead-webinar-logo.svg' alt="" />
                                </div>
                            </li>
                            <li class="styled-components__TypeCertificate-x2nx2g-7 fDZwou" title="">
                                <div class="styled-components__ImageCertificate-x2nx2g-8 iZAJRJ"><img class="styled-components__LogoCertificate-x2nx2g-9 dmcaPP" src='https://www.aeologic.com/assets/images/logo.svg' alt="" />
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
            <ContactForm />
            <Footer />
        </>
    )
}
export default BotDevelopment;