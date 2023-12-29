import React from 'react'

const page = () => {
    return (
        <section id="thank-you">
            <div className="container py-5 my-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="contact-information">
                            <div className="section-header">
                                <h2 className="section-title">
                                    Get in <span className="text-primary">Touch</span>{" "}
                                </h2>
                                <p>We will get back to you as soon as possible.</p>
                            </div>
                            <div className="row mt-5">
                                <div className="d-flex flex-wrap">
                                    <div className="col-md-6 mb-5">
                                        <div className="detail">
                                            <h3 className="fs-5">Phones</h3>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="icon icon-phone me-2" />
                                                    +1650-243-00023
                                                </li>
                                                <li>
                                                    <i className="icon icon-phone me-2" />
                                                    +1650-243-00021
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5 ">
                                        <div className="detail">
                                            <h3 className="fs-5">Emails</h3>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">info@yourcompany.com</a>
                                                </li>
                                                <li>
                                                    <a href="#">support@yourcompany.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5 ">
                                        <div className="address detail">
                                            <h3 className="fs-5">Address</h3>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <span>North Melbourne VIC 3051, Australia</span>
                                                </li>
                                                <li>
                                                    <span>South Sydney VIC 2045, Australia</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <div className="detail">
                                            <h3 className="fs-5">Social Links</h3>
                                            <ul className="social-links list-unstyled d-flex">
                                                <li>
                                                    <a href="#" className="me-3">
                                                        {/* <iconify-icon
                                                            className="social-icon fs-5"
                                                            icon="ri:facebook-fill"
                                                        /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3">
                                                        {/* <iconify-icon
                                                            className="social-icon fs-5"
                                                            icon="ri:twitter-fill"
                                                        /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3">
                                                        {/* <iconify-icon
                                                            className="social-icon fs-5"
                                                            icon="ri:pinterest-fill"
                                                        /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3">
                                                        {/* <iconify-icon
                                                            className="social-icon fs-5"
                                                            icon="ri:instagram-fill"
                                                        /> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3">
                                                        {/* <iconify-icon
                                                            className="social-icon fs-5"
                                                            icon="ri:youtube-fill"
                                                        /> */}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page