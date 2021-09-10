import React from 'react';
import "./blogs.css";
import { Icon } from '@iconify/react';
import Footer from '../../components/footer/foot';
import Header from '../../components/header/header';
import ScrollToTop from '../../components/scrollToTop';
import homeSolid from '@iconify-icons/clarity/home-solid';
import SideSocialMedia from '../../components/sideSocialMedia';
import arrowRightAlt2 from '@iconify-icons/dashicons/arrow-right-alt2';
const Blog = () => {
    return (
        <>
            <Header data="blog" />
            <SideSocialMedia />
            <ScrollToTop />
            {/* Blog Header */ }
            <div className="ttm-page-title-row">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-box text-center" >
                                <div className="page-title-heading">
                                    <h1 className="title">Our Blogs</h1>
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

            {/* Blog Content */ }
            <div class="background aem-GridColumn aem-GridColumn--default--12">
                <div className="offset offset--light-blue">
                    <div className="cmp-background theme theme--purple-angles">
                        <div className="container">
                            <div>
                                <div className="industry-highlights">
                                    <div className="cmp-background bg-transparent">
                                        <div className="container">
                                            <section className="cmp-industry-highlights">
                                            <div className="industry-highlights">
                                                    <div className="industry-highlights__container container container--wide">
                                                        <div className="industry-highlights__grid cardsrow">
                                                            <div className="industry-highlight-card section">
                                                                <div className="row">
                                                                <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/one-click-fdac64fb6261" target="_blank" rel="noreferrer">
                                                                            <div className="contain">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/oneclick.png" className="image-content" alt="One Click"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">                                                                                        
                                                                                            <h4 class="overlayContent">One Click</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >
                                                                                                Read                                                                                    
                                                                                                <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                  
                                                                    <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/crud-operation-c5ba129d72df" target="_blank" rel="noreferrer">
                                                                            <div className="contain2">
                                                                                    <div className="picture-content">
                                                                                        <picture>
                                                                                            <img src="/img/crud.png" className="image-content" alt="NodeJs CRUD Operation"/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overlay overlayBottom">
                                                                                        <div className="text">
                                                                                            <div class="overlayContent">
                                                                                                <h4 class="overlayContent">NodeJs CRUD Operation </h4>                                                                                    
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="overlay2 overlayBottom2">
                                                                                        <div>
                                                                                            <div className="text">
                                                                                                <div className="overlayalign" >
                                                                                                    Read                                                                                    
                                                                                                    <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>                                                                                             
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                  
                                                                    <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/image-upload-using-nodejs-16b1e804ec92" target="_blank" rel="noreferrer">
                                                                            <div className="contain3">
                                                                                    <div className="picture-content">
                                                                                        <picture>
                                                                                            <img src="/img/uploadapi.png" className="image-content" alt="Image upload using NodeJs "/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overlay overlayBottom">
                                                                                        <div className="text">
                                                                                            <div class="overlayContent">
                                                                                                <h4 class="overlayContent">Image upload using NodeJs </h4>                                                                                    
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="overlay2 overlayBottom2">
                                                                                        <div>
                                                                                            <div className="text">
                                                                                                <div className="overlayalign" >
                                                                                                    Read                                                                                    
                                                                                                    <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>                                                                         
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                   
                                                                    <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/how-to-serve-static-resource-with-node-js-e86aa85b81c3" target="_blank" rel="noreferrer">
                                                                            <div className="contain">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/staticresource.png" className="image-content" alt="Serve Static Resource With Node.js"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                        <div class="overlayContent">
                                                                                            <h4 class="overlayContent">Serve Static Resource With Node.js</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >
                                                                                                Read                                                                                    
                                                                                                <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                   
                                                                    <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/how-to-send-emails-with-templates-using-nodejs-176b72c1406d" target="_blank" rel="noreferrer">
                                                                            <div className="contain2">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/sendemail.png" className="image-content" alt="Send Emails With Templates using NodeJs"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                        <div class="overlayContent">
                                                                                            <h4 class="overlayContent">Send Emails With Templates using NodeJs</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >
                                                                                                Read                                                                                    
                                                                                                <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                  
                                                                    <div className="col-md-4 col-lg-4 col-sm-4">
                                                                        <a class="industry-highlights__link" href="https://medium.com/jsblend/social-media-login-using-nodejs-and-passportjs-be9b58cc359d" target="_blank" rel="noreferrer">
                                                                            <div className="contain3">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/login.png" className="image-content" alt="Social Media Login Using NodeJs and PassportJs"/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                        <div class="overlayContent">
                                                                                            <h4 class="overlayContent">Social Media Login Using NodeJs and PassportJs</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >
                                                                                                Read                                                                                    
                                                                                                <Icon icon={arrowRightAlt2} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                    </div>                         
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />    
        </>
    )
}
export default Blog;