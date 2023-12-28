import React from 'react'

const Banner = () => {
    return (
        <section
            id="banner"
            style={{ backgroundImage: "url(/images/banner-img2.jpg)" }}
        >
            <div className="container padding-medium-2">
                <div className="hero-content ">
                    <h2 className="display-1 fw-bold mt-5 mb-0">Shop</h2>
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item nav-link" href="#">
                            Home
                        </a>
                        <a className="breadcrumb-item nav-link" href="#">
                            Pages
                        </a>
                        <span className="breadcrumb-item active" aria-current="page">
                            Shop
                        </span>
                    </nav>
                </div>
            </div>
        </section>

    )
}

export default Banner