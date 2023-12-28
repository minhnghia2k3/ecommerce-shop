import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return (
        <nav className="main-menu d-flex navbar fixed-top navbar-expand-lg py-4">
            <div className="container">
                <div className="main-logo">
                    <Link href="/">
                        <img src="/images/logo.png" alt="logo" className="img-fluid" />
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header justify-content-center">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body justify-content-between">
                        <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 ps-lg-5 mb-0">
                            <li className="nav-item">
                                <Link href="index.html" className="nav-link mx-2 active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link mx-2 dropdown-toggle"
                                    role="button"
                                    id="pages"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="pages">
                                    <li>
                                        <a href="about.html" className="dropdown-item">
                                            About Us
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html" className="dropdown-item">
                                            Shop
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="single-product.html" className="dropdown-item">
                                            Single Product
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="cart.html" className="dropdown-item">
                                            Cart
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="dropdown-item">
                                            Wishlist
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="checkout.html" className="dropdown-item">
                                            Checkout
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="dropdown-item">
                                            Blog
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="single-post.html" className="dropdown-item">
                                            Single Post
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="dropdown-item">
                                            Contact
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faqs.html" className="dropdown-item">
                                            FAQs
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account.html" className="dropdown-item">
                                            Account
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="thank-you.html" className="dropdown-item">
                                            Thankyou
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="error.html" className="dropdown-item">
                                            Error 404
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="styles.html" className="dropdown-item">
                                            Styles
                                            <span className="badge bg-secondary-subtle text-dark ms-2">
                                                PRO
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/shopping" className="nav-link mx-2">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-2">
                                    T-Shirts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-2">
                                    Hoodies
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://templatesjungle.gumroad.com/l/uniclub-t-shirt-bootstrap5-eCommerce-website-template"
                                    className="nav-link mx-2"
                                    target="_blank"
                                >
                                    GET PRO
                                </a>
                            </li>
                        </ul>
                        <div className="d-none d-lg-flex align-items-end">
                            <ul className="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link href="/login" className="mx-3">
                                        <i className="fs-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 48 48"
                                            >
                                                <g fill="currentColor">
                                                    <path d="M6 36c0-4.965 11.993-8 18-8c6.008 0 18 3.035 18 8v6H6z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10"
                                                        clipRule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <a href="wishlist.html" className="mx-3">
                                        <i className="fs-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                                                />
                                            </svg>

                                        </i>
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#"
                                        className="mx-3"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasCart"
                                        aria-controls="offcanvasCart"
                                    >
                                        <i
                                            className="fs-4 position-relative"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                                                />
                                            </svg>
                                        </i>
                                        <span className="position-absolute translate-middle badge rounded-circle bg-primary">
                                            03
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="mx-3"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasSearch"
                                        aria-controls="offcanvasSearch"
                                    >
                                        <i className="fs-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                                                />
                                            </svg>

                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-lg-none">
                <div className="d-flex  align-items-end mt-3">
                    <ul className="d-flex justify-content-end list-unstyled m-0">
                        <li>
                            <a href="account.html" className="me-4">
                                {/* <iconify-icon icon="healthicons:person" className="fs-4 me-2" /> */}
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html" className="me-4">
                                {/* <iconify-icon icon="mdi:heart" className="fs-4 me-2" /> */}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasCart"
                                aria-controls="offcanvasCart"
                            >
                                {/* <iconify-icon
                                    icon="mdi:cart"
                                    className="fs-4 me-2 position-relative"
                                /> */}
                                <span className="position-absolute translate-middle badge rounded-circle bg-primary">
                                    03
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasSearch"
                                aria-controls="offcanvasSearch"
                            >
                                {/* <iconify-icon icon="tabler:search" className="fs-4 me-2" /> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar