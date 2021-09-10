import React from 'react'
import './OurServicesheading.css'
export const OurServicesHeading = (props) => {
    return (
        <>
            <section className="head-banner-img">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title-box text-center">
                                <div className="services-heading">
                                    <h1> { props.title } </h1>
                                    <p>{ props.content }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServicesHeading;