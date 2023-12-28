import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="bg-black">
                <div className="container padding-medium pt-5">
                    <div className="row mt-5">
                        <div className="col-md-4 offset-md-1">
                            <div className="footer-menu">
                                <img src="/images/logo-dark.png" alt="logo" />
                                <div className="social-links mt-4">
                                    <ul className="d-flex list-unstyled gap-3">
                                        <li className="social">
                                            <a href="#">
                                                {/* <iconify-icon
                                                    className="social-icon fs-5 text-white me-4"
                                                    icon="ri:facebook-fill"
                                                /> */}
                                            </a>
                                        </li>
                                        <li className="social">
                                            <a href="#">
                                                {/* <iconify-icon
                                                    className="social-icon fs-5 text-white me-4"
                                                    icon="ri:twitter-fill"
                                                /> */}
                                            </a>
                                        </li>
                                        <li className="social">
                                            <a href="#">
                                                {/* <iconify-icon
                                                    className="social-icon fs-5 text-white me-4"
                                                    icon="ri:pinterest-fill"
                                                /> */}
                                            </a>
                                        </li>
                                        <li className="social">
                                            <a href="#">
                                                {/* <iconify-icon
                                                    className="social-icon fs-5 text-white me-4"
                                                    icon="ri:instagram-fill"
                                                /> */}
                                            </a>
                                        </li>
                                        <li className="social">
                                            <a href="#">
                                                {/* <iconify-icon
                                                    className="social-icon fs-5 text-white me-4"
                                                    icon="ri:youtube-fill"
                                                /> */}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu">
                                <h6 className="text-uppercase fw-bold text-white mb-4">
                                    Quick Links
                                </h6>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            About us
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Offer{" "}
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Services
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Conatct Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu">
                                <h6 className="text-uppercase fw-bold text-white mb-4">About</h6>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            How It Work
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Our Packages
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            promotions
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            refer a friend
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu">
                                <h6 className="text-uppercase fw-bold text-white mb-4">
                                    Help Center
                                </h6>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Payments
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Shipping
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Product returns{" "}
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            Checkout
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="footer-link">
                                            other Issues
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="footer-bottom" className="bg-black">
                <hr className="m-0" />
                <div className="container padding-medium pt-3">
                    <div className="row mt-3">
                        <div className="col-md-6 copyright">
                            <p className="secondary-font">© 2023 UNICLUB. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="secondary-font">
                                Free HTML Template by{" "}
                                <a
                                    href="https://templatesjungle.com/"
                                    target="_blank"
                                    className="text-decoration-underline fw-bold text-white-50"
                                >
                                    {" "}
                                    TemplatesJungle
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer