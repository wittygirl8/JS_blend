import React from 'react'
import './DescriptionImagePage.css';

const ShortDesc = (props) => {
    return (
        <>
            <section class="section Section-sc-1jp9o0i-0 doTvsL">
                <div class="bhiCFr" data-aos="fade-up">
                    <div class="partner_head">{props.title}</div>
                        <div className="row izCVqL">   
                                    <div className="col-lg-2 col-md-4 col-sm-4 ">                                 
                                        <div class="haSjLg dkUQrm"><img class="styled-components__LogoAwards-bq3ujf-7 fAUiSK" src={props.img} alt={props.alt}/></div>
                                    </div>
                                    <div className="col-lg-10 col-md-8 col-sm-8">
                                    <div class="ivnTPd">{props.desc}</div>                           
                                    </div>                            
                            </div>
                </div>
            </section>
        </>
    )
}
export default ShortDesc;
