import React from 'react'
import Footer from '../../../components/footer/foot';
import ContactForm from "../../../components/contactForm/contact-form";
import Header from "../../../components/header/header";
import OurServicesHeading from "../OurServicesHeading/OurServicesHeading";
import ImagePage from "../DescriptionImagePage/DescriptionImagePage";
import SideSocialMedia from '../../../components/sideSocialMedia';

function SupportServices(){
    return (
        <>
            <Header />
            <SideSocialMedia />
            <OurServicesHeading title = 'Support services' content = "Our support center achieves efficient and timely customer &amp; full-fledged technical support. We can either support your existing team or contribute a completely innovative support team solutions." />
            
            <section class="section Section-sc-1jp9o0i-0" style={{paddingBottom: "7%", paddingTop: "5%"}}>
                <div class="Container-sc-3arkl6-0 bhiCFr aos-init aos-animate" data-aos="fade-up">
                    <div class="styled-componets__HeadExpertise-sc-1ntrm44-0 hRdBEn Heading-sc-178lehg-0 kfQNXn" style={{paddingBottom: "60px"}}>Our domain expertise</div>
                    <ol class="styled-componets__ListExpertise-sc-1ntrm44-1 dHUcVU">
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Client support (1st Level)</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Technical assistance (2nd Level)</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Conflict Management</li>
                        <li class="styled-componets__ItemExpertise-sc-1ntrm44-2 bYmMoL">Content Management &amp; Moderation</li>
                    </ol>
                </div>
            </section>
            
            <ImagePage img1 = "https://www.aeologic.com/assets/images/shutterstock_187137887.jpg" img2="https://www.aeologic.com/assets/images/shutterstock_424677625.jpg" img3="https://www.aeologic.com/assets/images/Support_Services.jpg"/>            
            
            <section class="section styled-components__CertificationsSection-x2nx2g-0 eBpPWb Section-sc-1jp9o0i-0 doTvsL">
                <div class="AnchorScrollTo-sc-1pj4e2o-0 cDtlua"></div>
                <div class="Container-sc-3arkl6-0 bhiCFr">
                    <div class="Heading-sc-178lehg-0 kfQNXn">Tools</div>
                    <div class="styled-components__ContainerCertifications-x2nx2g-1 cvmolB">
                        <div class="styled-components__CatalogCertifications-x2nx2g-4 dehwSN">
                            <ol class="styled-components__Certifications-x2nx2g-5 dlCqmF">
                                <li class="styled-components__TypeCertificate-x2nx2g-7 fDZwou" title="">
                                    <div class="styled-components__ImageCertificate-x2nx2g-8 iZAJRJ"><img class="styled-components__LogoCertificate-x2nx2g-9 dmcaPP" src='https://www.aeologic.com/assets/images/logo/logo-34.png' alt="Certifications description text"/>
                                    </div>
                                </li>
                                <li class="styled-components__TypeCertificate-x2nx2g-7 fDZwou" title="">
                                    <div class="styled-components__ImageCertificate-x2nx2g-8 iZAJRJ"><img class="styled-components__LogoCertificate-x2nx2g-9 dmcaPP" src='https://www.aeologic.com/assets/images/logo/logo-35.png' alt="Certifications description text" />
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
export default SupportServices;
