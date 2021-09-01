import React from 'react'
import "./Checkout.css"

function Checkout({price}) {
    return (
        <div>
            <div className="checkout-title">Cart Price</div>
            <div>Price: <span className="checkout-price">Ξ {price.toFixed(2)}</span></div>
            <div>Gas Fee: <span className="checkout-price">Ξ {(price*0.1).toFixed(2)}</span> (10% of the price) </div>
            <div>Total Price: <span className="checkout-price">Ξ {(price + price*0.1).toFixed(2)}</span></div>
            <div className="checkout-description">You will save <span className="checkout-price">Ξ {(price*0.05).toFixed(2)}</span> in gas fees on this order</div>
            <div className="btn btn-scs checkout-button">Checkout</div>
        </div>
    )
}

export default Checkout