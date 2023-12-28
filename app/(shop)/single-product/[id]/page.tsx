import React from 'react'

const page = () => {
    return (
        <>
            <section id="selling-product">
                <div className="container my-md-5 py-5">
                    <div className="row g-md-5">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-3 d-none d-md-flex">
                                    {/* product-thumbnail-slider */}

                                    {/* <div className="swiper product-thumbnail-slider swiper-initialized swiper-vertical swiper-backface-hidden swiper-thumbs">
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-98576281bb473a64"
                                            aria-live="off"
                                            style={{
                                                transform: "translate3d(0px, -220px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-prev"
                                                style={{ height: 190, marginBottom: 30 }}
                                                role="group"
                                                aria-label="3 / 4"
                                                data-swiper-slide-index={2}
                                            >
                                                <img
                                                    src="/images/item3.jpg"
                                                    alt=""
                                                    className="thumb-image img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                role="group"
                                                aria-label="4 / 4"
                                                data-swiper-slide-index={3}
                                                style={{ height: 190, marginBottom: 30 }}
                                            >
                                                <img
                                                    src="/images/item4.jpg"
                                                    alt=""
                                                    className="thumb-image img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-next"
                                                style={{ height: 190, marginBottom: 30 }}
                                                role="group"
                                                aria-label="1 / 4"
                                                data-swiper-slide-index={0}
                                            >
                                                <img
                                                    src="/images/item1.jpg"
                                                    alt=""
                                                    className="thumb-image img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-thumb-active swiper-slide-visible"
                                                style={{ height: 190, marginBottom: 30 }}
                                                role="group"
                                                aria-label="2 / 4"
                                                data-swiper-slide-index={1}
                                            >
                                                <img
                                                    src="/images/item2.jpg"
                                                    alt=""
                                                    className="thumb-image img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div> */}
                                    <div
                                        className="swiper-slide swiper-slide-prev"
                                        style={{
                                            width: 395,
                                            opacity: 1,
                                            transform: "translate3d(0px, 0px, 0px)",
                                            transitionDuration: "0ms"
                                        }}
                                        role="group"
                                        aria-label="1 / 4"
                                        data-swiper-slide-index={0}
                                    >
                                        <img
                                            src="/images/item4.jpg"
                                            alt="product-large"
                                            className="img-fluid"
                                        />
                                    </div>
                                    {/* / product-thumbnail-slider */}

                                </div>
                                <div className="col-md-9">
                                    <div
                                        className="swiper-slide swiper-slide-prev"
                                        style={{
                                            width: 395,
                                            opacity: 1,
                                            transform: "translate3d(0px, 0px, 0px)",
                                            transitionDuration: "0ms"
                                        }}
                                        role="group"
                                        aria-label="1 / 4"
                                        data-swiper-slide-index={0}
                                    >
                                        <img
                                            src="/images/item4.jpg"
                                            alt="product-large"
                                            className="img-fluid"
                                        />
                                    </div>
                                    {/* product-large-slider */}
                                    {/* <div className="swiper product-large-slider swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-8a510dbefbe14ba10d"
                                            aria-live="off"
                                            style={{ transitionDuration: "0ms" }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-prev"
                                                style={{
                                                    width: 395,
                                                    opacity: 1,
                                                    transform: "translate3d(0px, 0px, 0px)",
                                                    transitionDuration: "0ms"
                                                }}
                                                role="group"
                                                aria-label="1 / 4"
                                                data-swiper-slide-index={0}
                                            >
                                                <img
                                                    src="/images/item4.jpg"
                                                    alt="product-large"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                style={{
                                                    width: 395,
                                                    opacity: 1,
                                                    transform: "translate3d(-395px, 0px, 0px)",
                                                    transitionDuration: "0ms"
                                                }}
                                                role="group"
                                                aria-label="2 / 4"
                                                data-swiper-slide-index={1}
                                            >
                                                <img
                                                    src="/images/item-lg2.jpg"
                                                    alt="product-large"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-next"
                                                style={{
                                                    width: 395,
                                                    opacity: 0,
                                                    transform: "translate3d(-790px, 0px, 0px)",
                                                    transitionDuration: "0ms"
                                                }}
                                                role="group"
                                                aria-label="3 / 4"
                                                data-swiper-slide-index={2}
                                            >
                                                <img
                                                    src="/images/item-lg3.jpg"
                                                    alt="product-large"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div
                                                className="swiper-slide"
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{
                                                    width: 395,
                                                    opacity: 0,
                                                    transform: "translate3d(-1185px, 0px, 0px)",
                                                    transitionDuration: "0ms"
                                                }}
                                                data-swiper-slide-index={3}
                                            >
                                                <img
                                                    src="/images/item-lg4.jpg"
                                                    alt="product-large"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div> */}
                                    {/* / product-large-slider */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 ">
                            <div className="product-info">
                                <div className="element-header">
                                    <h2 itemProp="name" className="display-6 fw-bold">
                                        Printed T-Shirt
                                    </h2>
                                    <div className="rating-container d-flex gap-0 align-items-center">
                                        <span className="rating secondary-font text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>

                                            5.0</span>
                                    </div>
                                    <div className="product-price pt-3 pb-3">
                                        <strong className="text-primary display-6 ">$170.00</strong>
                                        <del className="ms-2">$240.00</del>
                                    </div>
                                    <p>
                                        Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque
                                        amet. Bibendum adipiscing platea blandit sit sed quam semper
                                        rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras
                                        lectus mauris, cras egestas quam venenatis neque.
                                    </p>
                                    <div className="cart-wrap">
                                        <div className="color-options product-select">
                                            <div className="color-toggle pt-2" data-option-index={0}>
                                                <h6 className="item-title fw-bold">Color:</h6>
                                                <ul className="select-list list-unstyled d-flex">
                                                    <li className="select-item pe-3" data-val="Gray" title="Gray">
                                                        <a href="#" className="btn btn-light fs-6 active">
                                                            Gray
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="select-item pe-3"
                                                        data-val="Black"
                                                        title="Black"
                                                    >
                                                        <a href="#" className="btn btn-light fs-6">
                                                            Black
                                                        </a>
                                                    </li>
                                                    <li className="select-item pe-3" data-val="Blue" title="Blue">
                                                        <a href="#" className="btn btn-light fs-6">
                                                            Blue
                                                        </a>
                                                    </li>
                                                    <li className="select-item" data-val="Red" title="Red">
                                                        <a href="#" className="btn btn-light fs-6 disabled">
                                                            Red
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="swatch product-select pt-3" data-option-index={1}>
                                            <h6 className="item-title fw-bold">Size:</h6>
                                            <ul className="select-list list-unstyled d-flex">
                                                <li data-value="XL" className="select-item pe-3">
                                                    <a href="#" className="btn btn-light fs-6">
                                                        XL
                                                    </a>
                                                </li>
                                                <li data-value="L" className="select-item pe-3">
                                                    <a href="#" className="btn btn-light fs-6 active">
                                                        L
                                                    </a>
                                                </li>
                                                <li data-value="M" className="select-item pe-3">
                                                    <a href="#" className="btn btn-light fs-6">
                                                        M
                                                    </a>
                                                </li>
                                                <li data-value="S" className="select-item">
                                                    <a href="#" className="btn btn-light fs-6">
                                                        S
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-quantity pt-2">
                                            <div className="stock-number text-dark">
                                                <em>2 in stock</em>
                                            </div>
                                            <div className="stock-button-wrap">
                                                <div className="d-flex flex-wrap">
                                                    <div className="input-group product-qty align-items-center w-25 me-3">
                                                        <span className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="quantity-left-minus btn btn-light btn-number"
                                                                data-type="minus"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
                                                                    <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                                                </svg>

                                                            </button>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            id="quantity"
                                                            name="quantity"
                                                            className="form-control input-number text-center p-2 mx-1"
                                                            defaultValue={1}
                                                        />
                                                        <span className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="quantity-right-plus btn btn-light btn-number"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                                                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                                </svg>

                                                            </button>
                                                        </span>
                                                    </div>
                                                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                        <h5 className="text-capitalize m-0">Add to Cart</h5>
                                                    </a>
                                                    <a href="#" className="btn-wishlist px-4 pt-1 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fs-5" width={25} height={25}>
                                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                        </svg>

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta-product pt-4">
                                        <div className="meta-item d-flex align-items-baseline">
                                            <h6 className="item-title fw-bold no-margin pe-2">SKU:</h6>
                                            <ul className="select-list list-unstyled d-flex">
                                                <li data-value="S" className="select-item">
                                                    1223
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="meta-item d-flex align-items-baseline">
                                            <h6 className="item-title fw-bold no-margin pe-2">Category:</h6>
                                            <ul className="select-list list-unstyled d-flex">
                                                <li data-value="S" className="select-item">
                                                    <a href="#">T-shirt</a>,
                                                </li>
                                                <li data-value="S" className="select-item">
                                                    <a href="#">Hoodies</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="meta-item d-flex align-items-baseline">
                                            <h6 className="item-title fw-bold no-margin pe-2">Tags:</h6>
                                            <ul className="select-list list-unstyled d-flex">
                                                <li data-value="S" className="select-item">
                                                    <a href="#">Clothes</a>,
                                                </li>
                                                <li data-value="S" className="select-item">
                                                    <a href="#">Cotton</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-info-tabs mb-5">
                <div className="container">
                    <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-start gap-5">
                            <div
                                className="nav flex-row flex-wrap flex-md-column nav-pills me-3 col-lg-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button
                                    className="nav-link fs-5 text-capitalize mb-2 text-start active"
                                    id="v-pills-description-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-description"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-description"
                                    aria-selected="true"
                                    tabIndex={-1}
                                >
                                    Description
                                </button>
                                <button
                                    className="nav-link fs-5 text-capitalize mb-2 text-start"
                                    id="v-pills-additional-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-additional"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-additional"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    Additional Information
                                </button>
                                <button
                                    className="nav-link fs-5 text-capitalize mb-2 text-start"
                                    id="v-pills-reviews-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-reviews"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-reviews"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    Customer Reviews
                                </button>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade active show"
                                    id="v-pills-description"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-description-tab"
                                    tabIndex={0}
                                >
                                    <h2>Product Description</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                        odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                        turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
                                        pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor mauris sit amet orci. Aenean dignissim pellentesque
                                        felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                        consectetuer ligula vulputate sem tristique cursus.
                                    </p>
                                    <ul
                                        style={{ listStyleType: "disc" }}
                                        className="list-unstyled ps-4"
                                    >
                                        <li>Donec nec justo eget felis facilisis fermentum.</li>
                                        <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                                        <li>Aliquam porttitor mauris sit amet orci.</li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                        odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                        turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
                                        pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor mauris sit amet orci. Aenean dignissim pellentesque
                                        felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                        consectetuer ligula vulputate sem tristique cursus.{" "}
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-additional"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-additional-tab"
                                    tabIndex={0}
                                >
                                    <h2>How to Use the Product</h2>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                        odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                        turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
                                        pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor mauris sit amet orci. Aenean dignissim pellentesque
                                        felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                        consectetuer ligula vulputate sem tristique cursus.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-reviews"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-reviews-tab"
                                    tabIndex={0}
                                >
                                    <div className="review-box d-flex flex-wrap">
                                        <div className="col-lg-6 d-flex flex-wrap gap-3">
                                            <div className="col-md-2">
                                                <div className="image-holder">
                                                    <img
                                                        src="/images/item4.jpg"
                                                        alt="review"
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="review-content">
                                                    <div className="rating-container d-flex align-items-center">
                                                        <div className="rating" data-rating={1}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={2}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={3}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={4}>
                                                            <svg width={24} height={24} className="text-secondary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={5}>
                                                            <svg width={24} height={24} className="text-secondary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <span className="rating-count">(3.5)</span>
                                                    </div>
                                                    <div className="review-header">
                                                        <span className="author-name text-black fw-bold">
                                                            Mark Johnson
                                                        </span>
                                                        <span className="review-date">– 03/07/2023</span>
                                                    </div>
                                                    <p>
                                                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                                                        Nam at lectus urna duis convallis convallis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex flex-wrap gap-3">
                                            <div className="col-md-2">
                                                <div className="image-holder">
                                                    <img
                                                        src="/images/item4.jpg"
                                                        alt="review"
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="review-content">
                                                    <div className="rating-container d-flex align-items-center">
                                                        <div className="rating" data-rating={1}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={2}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={3}>
                                                            <svg width={24} height={24} className="text-primary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={4}>
                                                            <svg width={24} height={24} className="text-secondary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <div className="rating" data-rating={5}>
                                                            <svg width={24} height={24} className="text-secondary">
                                                                <use xlinkHref="#star-solid" />
                                                            </svg>
                                                        </div>
                                                        <span className="rating-count">(3.5)</span>
                                                    </div>
                                                    <div className="review-header">
                                                        <span className="author-name text-black fw-bold">
                                                            Jenny Willis
                                                        </span>
                                                        <span className="review-date">– 03/06/2022</span>
                                                    </div>
                                                    <p>
                                                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                                                        Nam at lectus urna duis convallis convallis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-review mt-5">
                                        <h3>Add a review</h3>
                                        <p>
                                            Your email address will not be published. Required fields are
                                            marked *
                                        </p>
                                        <form id="form" className="form-group">
                                            <div className="pb-3">
                                                <div className="review-rating">
                                                    <span>Your rating *</span>
                                                    <div className="rating-container d-flex align-items-center">
                                                        <span className="rating secondary-font">
                                                            {/* <iconify-icon
                                                                icon="clarity:star-solid"
                                                                className="text-primary me-2"
                                                            /> */}
                                                            {/* <iconify-icon
                                                                icon="clarity:star-solid"
                                                                className="text-primary me-2"
                                                            /> */}
                                                            {/* <iconify-icon
                                                                icon="clarity:star-solid"
                                                                className="text-primary me-2"
                                                            /> */}
                                                            {/* <iconify-icon
                                                                icon="clarity:star-solid"
                                                                className="text-primary me-2"
                                                            /> */}
                                                            {/* <iconify-icon
                                                                icon="clarity:star-solid"
                                                                className="text-primary me-2"
                                                            /> */}
                                                            (5.0)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pb-3">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    data-text="Choose your file"
                                                />
                                            </div>
                                            <div className="pb-3">
                                                <label>Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Write your name here*"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="pb-3">
                                                <label>Your Email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Write your email here*"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="pb-3">
                                                <label>Your Review</label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Write your review here*"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="pb-3">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="label-body">
                                                        Save my name, email, and website in this browser for the
                                                        next time.
                                                    </span>
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                name="submit"
                                                className="btn btn-dark btn-large text-uppercase w-100"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default page