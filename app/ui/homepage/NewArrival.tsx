import React from 'react'
import AddToCard from '../atoms/AddToCard'

const NewArrival = () => {
    return (
        <section id="new-arrival" className="product-store">
            <div className="container">
                <h2 className="display-5 fw-light text-uppercase text-center mb-5">
                    New Arrivals
                </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div
                                className="image-holder"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <img
                                    src="images/item1.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                            New
                        </div>
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item2.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item3.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                            Sale
                        </div>
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item4.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item1.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item2.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                Sold
                            </div>
                            <div className="image-holder">
                                <img
                                    src="images/item3.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-4">
                        <div className="product-item">
                            <div className="image-holder">
                                <img
                                    src="images/item4.jpg"
                                    alt="Books"
                                    className="product-image img-fluid"
                                />
                            </div>
                            <AddToCard />
                            <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                <h4 className="product-title mb-0">
                                    <a href="single-product.html">Seven Zero Five</a>
                                </h4>
                                <p className="m-0 fs-5 fw-normal">$40.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pt-4">
                    <button type="submit" className="btn btn-dark rounded-3">
                        View All Products
                    </button>
                </div>
            </div>
        </section>

    )
}

export default NewArrival