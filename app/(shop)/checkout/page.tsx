import React from 'react'

const page = () => {
    return (
        <section id="checkout">
            <div className="container py-5 my-5">
                <form className="form-group">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-6">
                            <h2 className="text-dark pb-3">Billing Details</h2>
                            <div className="billing-details">
                                <label htmlFor="fname">Receiver Name*</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="receiver_name"
                                    className="form-control mt-2 mb-4 ps-3"
                                />

                                <label htmlFor="address">Street Address*</label>
                                <input
                                    type="text"
                                    id="adr"
                                    name="address"
                                    placeholder="House number and street name"
                                    className="form-control mt-3 ps-3 mb-3"
                                />
                                <label htmlFor="email">Phone *</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="form-control mt-2 mb-4 ps-3"
                                />
                                <label htmlFor="email">Email address *</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control mt-2 mb-4 ps-3"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="text-dark pb-3">Additional Information</h2>
                            <div className="billing-details">
                                <label htmlFor="fname">Order notes (optional)</label>
                                <textarea
                                    className="form-control pt-3 pb-3 ps-3 mt-2"
                                    placeholder="Notes about your order. Like special notes for delivery."
                                    defaultValue={""}
                                />
                            </div>
                            <div className="your-order mt-5">
                                <h2 className="display-7 text-dark pb-3">Cart Totals</h2>
                                <div className="total-price">
                                    <table cellSpacing={0} className="table">
                                        <tbody>
                                            <tr className="subtotal border-top border-bottom pt-2 pb-2 text-uppercase">
                                                <th>Subtotal</th>
                                                <td data-title="Subtotal">
                                                    <span className="price-amount amount ps-5">
                                                        <bdi>
                                                            <span className="price-currency-symbol">$</span>
                                                            1,500.00{" "}
                                                        </bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="order-total border-bottom pt-2 pb-2 text-uppercase">
                                                <th>Total</th>
                                                <td data-title="Total">
                                                    <span className="price-amount amount ps-5">
                                                        <bdi>
                                                            <span className="price-currency-symbol">$</span>
                                                            1,500.00{" "}
                                                        </bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="list-group mt-5 mb-3">
                                        <label className="list-group-item d-flex gap-2 border-0">
                                            <input
                                                className="form-check-input flex-shrink-0"
                                                type="radio"
                                                name="listGroupRadios"
                                                id="listGroupRadios1"
                                                defaultValue=""
                                                defaultChecked={true}
                                            />
                                            <span>
                                                <strong className="text-uppercase">
                                                    Direct bank transfer
                                                </strong>
                                                <small className="d-block text-body-secondary">
                                                    Make your payment directly into our bank account. Please
                                                    use your Order ID. Your order will shipped after funds
                                                    have cleared in our account.
                                                </small>
                                            </span>
                                        </label>
                                        <label className="list-group-item d-flex gap-2 border-0">
                                            <input
                                                className="form-check-input flex-shrink-0"
                                                type="radio"
                                                name="listGroupRadios"
                                                id="listGroupRadios2"
                                                defaultValue=""
                                            />
                                            <span>
                                                <strong className="text-uppercase">Check payments</strong>
                                                <small className="d-block text-body-secondary">
                                                    Please send a check to Store Name, Store Street, Store
                                                    Town, Store State / County, Store Postcode.
                                                </small>
                                            </span>
                                        </label>
                                        <label className="list-group-item d-flex gap-2 border-0">
                                            <input
                                                className="form-check-input flex-shrink-0"
                                                type="radio"
                                                name="listGroupRadios"
                                                id="listGroupRadios3"
                                                defaultValue=""
                                            />
                                            <span>
                                                <strong className="text-uppercase">Cash on delivery</strong>
                                                <small className="d-block text-body-secondary">
                                                    Pay with cash upon delivery.
                                                </small>
                                            </span>
                                        </label>
                                        <label className="list-group-item d-flex gap-2 border-0">
                                            <input
                                                className="form-check-input flex-shrink-0"
                                                type="radio"
                                                name="listGroupRadios"
                                                id="listGroupRadios3"
                                                defaultValue=""
                                            />
                                            <span>
                                                <strong className="text-uppercase">Paypal</strong>
                                                <small className="d-block text-body-secondary">
                                                    Pay via PayPal; you can pay with your credit card if you
                                                    don’t have a PayPal account.
                                                </small>
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        name="submit"
                                        className="btn btn-dark btn-lg rounded-1 w-100"
                                    >
                                        Place an order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default page