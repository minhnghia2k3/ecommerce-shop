import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <section className="login-tabs">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="tabs-listing">
                        <nav>
                            <div
                                className="nav nav-tabs d-flex justify-content-center border-dark-subtle mb-3"
                                id="nav-tab"
                                role="tablist"
                            >
                                <Link
                                    href='/login'
                                    className="nav-link account-tab mx-3 fs-4 border-bottom border-dark-subtle border-0 text-capitalize fw-semibold active"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href='/signup'
                                    className="nav-link account-tab mx-3 fs-4 border-bottom border-dark-subtle border-0 text-capitalize fw-semibold"
                                    id="nav-register-tab"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade active show"
                                id="nav-sign-in"
                                role="tabpanel"
                                aria-labelledby="nav-sign-in-tab"
                            >
                                <div className="col-lg-8 offset-lg-2 mt-5">
                                    <p className="mb-0">Log-In With Social</p>
                                    <hr className="my-1" />
                                    <div className="row mt-4 mb-5">
                                        <div className="d-grid col-md-6 my-2">
                                            <a href="#" className="btn btn-outline-dark py-4 px-5">
                                                <div className="d-flex flex-wrap justify-content-center align-items-center">
                                                    {/* <iconify-icon
                                                        icon="ion:logo-google"
                                                        className="signup-social-icon me-2 fs-5"
                                                    /> */}
                                                    <p className="mb-0 pt-1">Google</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="d-grid col-md-6 my-2">
                                            <a href="#" className="btn btn-outline-dark py-4 px-5">
                                                <div className="d-flex flex-wrap justify-content-center align-items-center">
                                                    {/* <iconify-icon
                                                        icon="ion:logo-facebook"
                                                        className="signup-social-icon me-2 fs-5"
                                                    /> */}
                                                    <p className="mb-0 pt-1">Facebook</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="mb-0">Or Log-In With Email</p>
                                    <hr className="my-1" />
                                    <form id="form1" className="form-group flex-wrap ">
                                        <div className="form-input col-lg-12 my-4">
                                            <input
                                                type="text"
                                                id="exampleInputEmail1"
                                                name="email"
                                                placeholder="Enter email address"
                                                className="form-control mb-3 p-4"
                                            />
                                            <input
                                                type="password"
                                                id="inputPassword1"
                                                placeholder="Enter password"
                                                className="form-control mb-3 p-4"
                                                aria-describedby="passwordHelpBlock"
                                            />
                                            <label className="py-3 d-flex flex-wrap justify-content-between">
                                                <div>
                                                    <input type="checkbox" required={true} className="d-inline" />
                                                    <span className="label-body ">Remember Me</span>
                                                </div>
                                                <div id="passwordHelpBlock" className="form-text ">
                                                    <a href="#" className="text-primary  fw-bold">
                                                        {" "}
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            </label>
                                            <div className="d-grid my-3">
                                                <a href="#" className="btn btn-dark btn-lg rounded-1">
                                                    Log In
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login