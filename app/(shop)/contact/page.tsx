import React from 'react'

const page = () => {
    return (
        <section className="contact-us">
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="contact-info col-lg-6 pb-3">
                        <h2 className="text-dark">Contact Information</h2>
                        <p>
                            Tortor dignissim convallis aenean et tortor at risus viverra
                            adipiscing.
                        </p>
                        <div className="page-content d-flex flex-wrap mt-5">
                            <div className="col-lg-6 col-sm-12">
                                <div className="content-box text-dark pe-4 mb-5">
                                    <h4 className="card-title">Office</h4>
                                    <div className="contact-address pt-3">
                                        <p>730 Glenstone Ave 65802, Springfield, US</p>
                                    </div>
                                    <div className="contact-number">
                                        <p>
                                            <a href="#">+123 987 321</a>
                                        </p>
                                        <p>
                                            <a href="#">+123 123 654</a>
                                        </p>
                                    </div>
                                    <div className="email-address">
                                        <p>
                                            <a href="#">contactoffice@website.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="content-box text-dark">
                                    <h4 className="card-title">Management</h4>
                                    <div className="contact-address pt-3">
                                        <p>730 Glenstone Ave 65802, Springfield, US</p>
                                    </div>
                                    <div className="contact-number">
                                        <p>
                                            <a href="#">+123 987 321</a>
                                        </p>
                                        <p>
                                            <a href="#">+123 123 654</a>
                                        </p>
                                    </div>
                                    <div className="email-address">
                                        <p>
                                            <a href="#">contactmanagement@website.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inquiry-item col-lg-6">
                        <div className="rounded-5">
                            <h2 className="text-dark">Get in Touch</h2>
                            <p>Use the form below to get in touch with us.</p>
                            <form id="form" className="form-group flex-wrap">
                                <div className="form-input col-lg-12 d-flex mb-3">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Write Your Name Here"
                                        className="form-control ps-3 me-3"
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Write Your Email Here"
                                        className="form-control ps-3"
                                    />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Phone Number"
                                        className="form-control ps-3"
                                    />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Write Your Subject Here"
                                        className="form-control ps-3"
                                    />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <textarea
                                        placeholder="Write Your Message Here"
                                        className="form-control ps-3"
                                        style={{ height: 150 }}
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                            <div className="d-grid">
                                <button className="btn btn-dark btn-lg rounded-1">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page