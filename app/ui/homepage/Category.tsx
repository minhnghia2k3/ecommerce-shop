import React from 'react'

const Category = () => {
    return (
        <section id="category" className="padding-medium">
            <div className="container-fluid">
                <div className="row px-md-5">
                    <div className="col-md-4 position-relative">
                        <div className="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
                            <h5 className="text-light text-uppercase">Printed T-Shirts</h5>
                        </div>
                        <div className="image-holder zoom-effect">
                            <a href="single-post.html">
                                <img
                                    src="images/category1.jpg"
                                    alt="img"
                                    className="post-image img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative ">
                        <div className="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
                            <h5 className="text-light text-uppercase">Mono T-Shirts</h5>
                        </div>
                        <div className="image-holder zoom-effect">
                            <a href="single-post.html">
                                <img
                                    src="images/category3.jpg"
                                    alt="img"
                                    className="post-image img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <div className="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
                            <h5 className="text-light text-uppercase">Graphic Hoodies</h5>
                        </div>
                        <div className="image-holder zoom-effect">
                            <a href="single-post.html">
                                <img
                                    src="images/category2.jpg"
                                    alt="img"
                                    className="post-image img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Category