import React from 'react'
import './DescriptionImagePage.css';
// import SideSocialMedia from '../../components/sideSocialMedia';

const DescriptionImagePage = (props) => {
    return (
        <>
                <div class="styled-componets__ContainerGallery-sc-14quweb-0 gNVpkd">
                    <div class="styled-componets__GridGallery-sc-14quweb-1 bLQkho styled-componets__GalleryGrid-poahot-0 dmUVJW" type="thumbnail">
                        <div class="styled-componets__CellGallery-sc-14quweb-2 jFUoRN">
                            <div className="pi-content">
                                <picture>
                                    <img src={props.img1} className="im-content" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div class="styled-componets__CellGallery-sc-14quweb-2 jFUoRN">
                            <div className="pi-content">
                                <picture>
                                    <img src={props.img2} className="im-content" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div class="styled-componets__CellGallery-sc-14quweb-2 jFUoRN">
                            <div className="pic-content">
                                <picture>
                                    <img src={props.img3} className="img-content" alt=""/>
                                </picture>
                            </div>
                        </div>

                        <div class="styled-componets__CellGallery-sc-14quweb-2 jFUoRN">
                            <div class="styled-componets__ImageGallery-sc-1bqer2y-0 jDEDUP" style={{backgroundImage: `url("https://www.aeologic.com/assets/images/shutterstock_613464041.jpg")`}}>
                            </div>
                        </div>
                        <div class="styled-componets__CellGallery-sc-14quweb-2 jFUoRN">
                            <div class="has-video styled-componets__ImageGallery-sc-1bqer2y-0 jDEDUP" style={{backgroundImage: `url("https://www.aeologic.com/assets/images/shutterstock_187137887.jpg")`}}>
                            </div>
                        </div>
                    </div>
                </div> 
        </>
    );
}

export default DescriptionImagePage;
