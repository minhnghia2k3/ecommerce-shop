import React from 'react'

const page = () => {
    return (
        <section id="shop">
            <div className="container py-5 my-5">
                <div className="row flex-md-row-reverse g-md-5 mb-5">
                    <main className="col-md-9">
                        <div className="filter-shop d-md-flex justify-content-between align-items-center">
                            <div className="showing-product">
                                <p className="m-0">Showing 1–9 of 55 results</p>
                            </div>
                            <div className="sort-by">
                                <select className="filter-categories border-0 m-0">
                                    <option value="">Default sorting</option>
                                    <option value="">Name (A - Z)</option>
                                    <option value="">Name (Z - A)</option>
                                    <option value="">Price (Low-High)</option>
                                    <option value="">Price (High-Low)</option>
                                    <option value="">Rating (Highest)</option>
                                    <option value="">Rating (Lowest)</option>
                                    <option value="">Model (A - Z)</option>
                                    <option value="">Model (Z - A)</option>
                                </select>
                            </div>
                        </div>
                        <div className="row product-store">
                            <div className="col-md-6 col-lg-4 my-4">
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
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
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
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item3.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
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
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item1.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item2.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item3.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    Sold
                                </div>
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item4.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 my-4">
                                <div className="product-item">
                                    <div className="image-holder">
                                        <img
                                            src="images/item1.jpg"
                                            alt="Books"
                                            className="product-image img-fluid"
                                        />
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <a
                                                href="#"
                                                className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 "
                                            >
                                                add to cart
                                                <i className="icon icon-arrow-io pe-1" />
                                            </a>
                                            <a href="single-product.html" className="view-btn">
                                                <i className="icon icon-screen-full" />
                                            </a>
                                            <a href="#" className="wishlist-btn">
                                                <i className="icon icon-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail d-flex justify-content-between align-items-center mt-4">
                                        <h4 className="product-title mb-0">
                                            <a href="single-product.html">Seven Zero Five</a>
                                        </h4>
                                        <p className="m-0 fs-5 fw-normal">$40.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav
                            className="navigation paging-navigation text-center mt-5"
                            role="navigation"
                        >
                            <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
                                <a
                                    href="#"
                                    className="pagination-arrow d-flex align-items-center mx-3"
                                >
                                    {/* <iconify-icon
                                        icon="ic:baseline-keyboard-arrow-left"
                                        className="pagination-arrow fs-1"
                                    /> */}
                                </a>
                                <span
                                    aria-current="page"
                                    className="page-numbers mt-2 fs-3 mx-3 current"
                                >
                                    1
                                </span>
                                <a className="page-numbers mt-2 fs-3 mx-3" href="#">
                                    2
                                </a>
                                <a className="page-numbers mt-2 fs-3 mx-3" href="#">
                                    3
                                </a>
                                <a
                                    href="#"
                                    className="pagination-arrow d-flex align-items-center mx-3"
                                >
                                    {/* <iconify-icon
                                        icon="ic:baseline-keyboard-arrow-right"
                                        className="pagination-arrow fs-1"
                                    /> */}
                                </a>
                            </div>
                        </nav>
                    </main>
                    <aside className="col-md-3 mt-5">
                        <div className="sidebar">
                            <div className="widget-menu">
                                <div className="widget-search-bar">
                                    <div className="search-bar border rounded-2 border-dark-subtle pe-3">
                                        <form
                                            id="search-form"
                                            className="text-center d-flex align-items-center"
                                            action=""
                                            method=""
                                        >
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-transparent"
                                                placeholder="Search for products"
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                                                />
                                            </svg>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-product-categories pt-5">
                                <h4 className="widget-title">Categories</h4>
                                <ul className="product-categories sidebar-list list-unstyled">
                                    <li className="cat-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            All
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            T-Shirt
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Hoodies
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Pants
                                        </a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Sweaters
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-product-tags pt-3">
                                <h4 className="widget-title">Tags</h4>
                                <ul className="product-tags sidebar-list list-unstyled">
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            T-shirts
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Clothes
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Cotton
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Woolen
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-product-brands pt-3">
                                <h4 className="widget-title">Brands</h4>
                                <ul className="product-tags sidebar-list list-unstyled">
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Addidas
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Puma
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Nike
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-price-filter pt-3">
                                <h4 className="widget-titlewidget-title">Filter By Price</h4>
                                <ul className="product-tags sidebar-list list-unstyled">
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            Less than $10
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            $10- $20
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            $20- $30
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            $30- $40
                                        </a>
                                    </li>
                                    <li className="tags-item">
                                        <a href="#" className="nav-link fw-semibold">
                                            $40- $50
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

    )
}

export default page