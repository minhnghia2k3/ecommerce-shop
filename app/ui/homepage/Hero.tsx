import React from 'react'

const Hero = () => {
    return (
        <section id="hero" style={{ backgroundImage: "url(images/banner-img1.jpg)" }}>
            <div className="container padding-large">
                <div className="row">
                    <div className="col-md-6 col-lg-5 offset-md-2 text-center bg-black p-5">
                        <h2 className="display-1 banner-text text-uppercase text-white mt-3">
                            Street Wears
                        </h2>
                        <p className="text-uppercase text-white mb-4">
                            High quality cool tshirts for street fashion
                        </p>
                        <a href="#" className="btn btn-outline-light btn-wrap">
                            Start Shopping{" "}
                            <i className="icon icon-arrow-io fs-5 align-text-bottom" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero