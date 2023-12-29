import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section id="cart" className="my-5 py-5">
            <div className="container">
                <div className="row g-md-5">
                    <div className="col-md-8 pe-md-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="card-title text-uppercase">
                                        Product
                                    </th>
                                    <th scope="col" className="card-title text-uppercase">
                                        Quantity
                                    </th>
                                    <th scope="col" className="card-title text-uppercase">
                                        Subtotal
                                    </th>
                                    <th scope="col" className="card-title text-uppercase" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row" className="py-4">
                                        <div className="cart-info d-flex flex-wrap align-items-center ">
                                            <div className="col-lg-3">
                                                <div className="card-image">
                                                    <img
                                                        src="images/item1.jpg"
                                                        alt="cloth"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="card-detail ps-3">
                                                    <h5 className="card-title">
                                                        <a href="#" className="text-decoration-none">
                                                            Printed T-shirt
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="input-group product-qty align-items-center w-50">
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-left-minus p-1 btn btn-light btn-number"
                                                    data-type="minus"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
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
                                                    className="quantity-right-plus p-1 btn btn-light btn-number"
                                                    data-type="plus"
                                                    data-field=""
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="total-price">
                                            <span className="secondary-font fw-medium">$150.00</span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="cart-remove">
                                            <a href="#">
                                                <svg width={24} height={24}>
                                                    <use xlinkHref="#trash" />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row" className="py-4">
                                        <div className="cart-info d-flex flex-wrap align-items-center ">
                                            <div className="col-lg-3">
                                                <div className="card-image">
                                                    <img
                                                        src="images/item2.jpg"
                                                        alt="cloth"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="card-detail ps-3">
                                                    <h5 className="card-title">
                                                        <a href="#" className="text-decoration-none">
                                                            Black T-shirt
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="input-group product-qty align-items-center w-50">
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-left-minus p-1 btn btn-light btn-number"
                                                    data-type="minus"
                                                >
                                                    <svg width={16} height={16}>
                                                        <use xlinkHref="#minus" />
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
                                                    className="quantity-right-plus p-1 btn btn-light btn-number"
                                                    data-type="plus"
                                                    data-field=""
                                                >
                                                    <svg width={16} height={16}>
                                                        <use xlinkHref="#plus" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="total-price">
                                            <span className="secondary-font fw-medium">$190.00</span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="cart-remove">
                                            <a href="#">
                                                <svg width={24} height={24}>
                                                    <use xlinkHref="#trash" />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row" className="py-4">
                                        <div className="cart-info d-flex flex-wrap align-items-center ">
                                            <div className="col-lg-3">
                                                <div className="card-image">
                                                    <img
                                                        src="images/item3.jpg"
                                                        alt="cloth"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="card-detail ps-3">
                                                    <h5 className="card-title">
                                                        <a href="#" className="text-decoration-none">
                                                            Sweat Shirt
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="input-group product-qty align-items-center w-50">
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-left-minus p-1 btn btn-light btn-number"
                                                    data-type="minus"
                                                >
                                                    <svg width={16} height={16}>
                                                        <use xlinkHref="#minus" />
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
                                                    className="quantity-right-plus p-1 btn btn-light btn-number"
                                                    data-type="plus"
                                                    data-field=""
                                                >
                                                    <svg width={16} height={16}>
                                                        <use xlinkHref="#plus" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="total-price">
                                            <span className="secondary-font fw-medium">$260.00</span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="cart-remove">
                                            <a href="#">
                                                <svg width={24} height={24}>
                                                    <use xlinkHref="#trash" />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-totals">
                            <h2 className="pb-4">Cart Total</h2>
                            <div className="total-price pb-4">
                                <table cellSpacing={0} className="table text-uppercase">
                                    <tbody>
                                        <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                                            <th>Subtotal</th>
                                            <td data-title="Subtotal">
                                                <span className="price-amount amount text-dark ps-5">
                                                    <bdi>
                                                        <span className="price-currency-symbol">$</span>1,500.00
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="order-total pt-2 pb-2 border-bottom">
                                            <th>Total</th>
                                            <td data-title="Total">
                                                <span className="price-amount amount text-dark ps-5">
                                                    <bdi>
                                                        <span className="price-currency-symbol">$</span>1,500.00
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="button-wrap row g-2">
                                <div className="col-md-12 mt-3">
                                    <Link href="/checkout" className="btn btn-dark p-3 w-100">
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page