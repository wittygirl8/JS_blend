import React, { useState } from 'react';
import "./service.css"
import Modal from 'react-modal';
import { Icon } from '@iconify/react';
import homeSolid from '@iconify-icons/clarity/home-solid';
import Footer from '../../components/footer/foot';
import Header from '../../components/header/header';
import arrowIosUpwardFill from '@iconify-icons/eva/arrow-ios-upward-fill';
import SideSocialMedia from '../../components/sideSocialMedia';
import 'reactjs-popup/dist/index.css';
Modal.setAppElement('#root');

const Service = () => {
    const [showModal, setShowModal] = useState(false);
    const [showDpNotice, setShowDpNotice] = useState(false);
    const [showWedpost, setShowWedpost] = useState(false);
    const [showTMS, setShowTMS] = useState(false);
    const [showEchallan, setShowEchallan] = useState(false);
    const [showrms, setShowrms] = useState(false);
    const [showWMS, setShowWMS] = useState(false);

    const customStyles = {
        overlay: {
            zIndex: 1001
        },
        content:{
            top: '50%',
            left:'50%',
            right:'auto',
            bottom:'auto',
            marginRight:'-50%',
            transform:'translate(-50%, -50% )',
            WebkitOverflowScrolling: 'touch',
        }
    };
    return (
        <>
            <Header data="service" />
            <SideSocialMedia />
            <div className="ttm-page-title-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-box text-center">
                                <div className="page-title-heading">
                                    <h1 className="title">Built with JsBlend</h1>
                                    <p>We are intent to deliver full JS solutions with high quality.</p> 
                                    <p>We’ve adopted Design First attitude which helps us deliver applications of highest quality.</p>
                                </div>
                                <div className="breadcrumb-wrapper">
                                <span>
                                            <a style={{textDecoration: 'none', color: "black"}} title="Homepage" href="/">
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
            <div class="background aem-GridColumn aem-GridColumn--default--12">
                <div className="offset offset--light-blue">
                    <div className="cmp-background theme theme--purple-angles">
                        <div className="container">                            
                                <div className="industry-highlights">
                                    <div className="cmp-background bg-transparent">
                                        <div className="container">
                                            <section className="cmp-industry-highlights">
                                                <div className="industry-highlights">
                                                    <div className="industry-highlights__container container container--wide">
                                                        <div className="industry-highlights__grid cardsrow">
                                                            <div className="industry-highlight-card section">
                                                                <div className="row " id="cards">
                                                                <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowModal(true)}} >
                                                                            <div className="contain">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/RFID-with-logo.png" className="image-content" alt=""/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                        
                                                                                            <h4 class="overlayContent">RFID Management System</h4>                                                                                    
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >                                                                                    
                                                                                                <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                                                                                                        
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} class="modalResponse" isOpen={showModal} onRequestClose={()=>setShowModal(false)} >
                                                                                <div >
                                                                                    <h2 className="h2tit">RFID Management System</h2>
                                                                                </div>                                                                                
                                                                                <p className="ptit" >With the rise in pollution, it is very important to monitor the root cause of major pollutants. We’ve worked on IoT based systems that will monitor the real-time data, sense the pollution levels and share the data to the command center. Such solutions help in finding out the worst affected areas and right action can be taken at the right time. This will help in taking care of our environment which is at a very alarming stage. Get Case-Study.</p>
                                                                                <button className="buttonModel" onClick={()=>{setShowModal(false)}} >Close</button>                                                        
                                                                            </Modal>
                                                                        </div>                                                                            
                                                                    </div>                  
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowDpNotice(true)}}>
                                                                            <div className="contain2">
                                                                                    <div className="picture-content">
                                                                                        <picture>
                                                                                            <img src="/img/DpNotice-with-logo.png" className="image-content" alt=""/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overlay overlayBottom">
                                                                                        <div className="text">
                                                                                                <h4 class="overlayContent">Delhi Traffic Police Notice</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="overlay2 overlayBottom2">
                                                                                        <div>
                                                                                            <div className="text">
                                                                                                <div className="overlayalign" >
                                                                                    
                                                                                                    <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>                                                                                             
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showDpNotice} onRequestClose={()=>setShowDpNotice(false)} >
                                                                                <h2 className="h2tit" >Delhi Traffic Police Notice</h2>
                                                                                <p className="ptit" >Delhi Traffic Police Notice is a sophisticated software application comprising Android based mobile app and web interface, developed for the purpose of providing an comprehensive solution for Transport Enforcement Officers and Traffic Policemen. This app-cumapplication is integrated with Vahan and Sarathi applications and provides a number of user-friendly features while covering all major functionalities of Traffic Enforcement System.</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowDpNotice(false)}} >Close</button>                                                        
                                                                            </Modal></div>                                                                    
                                                                    </div>                  
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowWedpost(true)}}>
                                                                            <div className="contain3">
                                                                                    <div className="picture-content">
                                                                                        <picture>    
                                                                                            <img src="/img/wedpost-with-logo.png" className="image-content" alt=""/>
                                                                                        </picture>
                                                                                    </div>
                                                                                    <div className="overlay overlayBottom">
                                                                                        <div className="text">
                                                                                                <h4 class="overlayContent">Wedpost</h4>                                                                                    
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="overlay2 overlayBottom2">
                                                                                        <div>
                                                                                            <div className="text">
                                                                                                <div className="overlayalign" >
                                                                                                    <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>                                                                         
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showWedpost} onRequestClose={()=>setShowWedpost(false)} >
                                                                                <h2 className="h2tit" >Wedpost</h2>
                                                                                <p className="ptit" >Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowWedpost(false)}} >Close</button>                                                        
                                                                            </Modal></div>   
                                                                    </div>                   
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowrms(true)}}>
                                                                            <div className="contain">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/RMS.png" className="image-content" alt=""/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlayContent">Research Management System</h4>                                                                                    
                                                                                        </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >                                                                                    
                                                                                                <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showrms} onRequestClose={()=>setShowrms(false)} >
                                                                                <h2 className="h2tit" >Research Management System</h2>
                                                                                <p className="ptit" >We are innovation partner that contributes to the research and development of future cities. We use science and technology to overcome urban challenges such as airborne emissions, resource efficiency, traffic congestion, the financing of basic services and the sustainability of infrastructure.</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowrms(false)}} >Close</button>                                                        
                                                                            </Modal>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowEchallan(true)}} >
                                                                            <div className="contain2">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/echallan.png" className="image-content" alt=""/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlayContent">Echallan</h4>                                                                                    
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >                                                                                    
                                                                                                <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showEchallan} onRequestClose={()=>setShowEchallan(false)} >
                                                                                <h2 className="h2tit" >Echallan</h2>
                                                                                <p className="ptit">e-Challan is a sophisticated software application comprising Android based mobile app and web interface, developed for the purpose of providing an comprehensive solution for Transport Enforcement Officers and Traffic Policemen. This app-cumapplication is integrated with Vahan and Sarathi applications and provides a number of user-friendly features while covering all major functionalities of Traffic Enforcement System.</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowEchallan(false)}} >Close</button>                                                        
                                                                            </Modal>
                                                                        </div>  
                                                                    </div>                   
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowTMS(true)}} >
                                                                            <div className="contain3">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/transportms.png" className="image-content" alt=""/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlayContent">Transport Management Solution(TMS)</h4>                                                                                    
                                                                                    </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >                                                                                                                                                
                                                                                                <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showTMS} onRequestClose={()=>setShowTMS(false)} >
                                                                                <h2 className="h2tit" >Transport Management Solution(TMS)</h2>
                                                                                <p className="ptit" >Transport management solutions consist of various aspects like covering shipment order management, planning, execution, documentation & billing( Hub Management). Our solutions are designed to work across your multi-modal transport network & manage all your key processes. This covers shipment order management, planning the order based on VSRC (Vehicle, Schedule, Routes, and Constraints), load planning, load consolidation, carrier selection, execution, documentation, and billing.</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowTMS(false)}} >Close</button>                                                        
                                                                            </Modal>
                                                                        </div>
                                                                    </div>        
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <a class="industry-highlights__link" onClick={()=>{setShowWMS(true)}} >
                                                                            <div className="contain">
                                                                                 <div className="picture-content">
                                                                                    <picture>
                                                                                        <img src="/img/wms.png" className="image-content" alt=""/>
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="overlay overlayBottom">
                                                                                    <div className="text">
                                                                                            <h4 class="overlayContent">Warehouse Management System(WMS)</h4>                                                                                    
                                                                                        </div>
                                                                                </div>
                                                                                <div className="overlay2 overlayBottom2">
                                                                                    <div>
                                                                                        <div className="text">
                                                                                            <div className="overlayalign" >                                                                                                                                                
                                                                                                <Icon icon={arrowIosUpwardFill} color="white" width="10" height="10" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>                                                                               
                                                                            </div>                                                                            
                                                                        </a>
                                                                        <div className="modal">
                                                                            <Modal style={customStyles} isOpen={showWMS} onRequestClose={()=>setShowWMS(false)} >
                                                                                <h2 className="h2tit" >Warehouse Management System(WMS)</h2>
                                                                                <p className="ptit" >Warehouse management system will be your choice of mode for the basic receipt-GR- Put Away-Pick-Pack-Dispatch functions to advanced automation needs. This consists of flexible Value-added Service, lot management, serial number tracking, etc. It uses sophisticated fulfillment logic for wave management, constraint-based selection, real-time replenishment and eliminates costly counts with auditor-approved counting functionality.</p>
                                                                                    <button className="buttonModel" onClick={()=>{setShowWMS(false)}} >Close</button>                                                        
                                                                            </Modal>
                                                                        </div>
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
            <Footer />    
        </>
    )
}

export default Service;