import React, { useEffect, useState } from 'react'
import Header from "../Components/Header"
import Image from "../Assets/EmptyCart.webp"
import "../Styles/Checkout.css"
import { Icon } from 'semantic-ui-react'
import CheckoutProduct from '../Components/CheckoutProduct'
import StripeContainer from '../Components/StripeContainer'
import Home from './Home'

function Checkout() {
    const [quantity, setQuantity] = useState(0)
    const products = 1
    const [productsArray, setArray] = useState([])
    const [buyItem,setBuyItem]=useState(false)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=> res.json()).then(data=>{
            setArray(data)    
        console.log(data)})
    },[])
    return (
        buyItem ?<StripeContainer/>:
      <div className="checkout">
        <Header />
        {products == 0 ? (
          <div className="no__product">
            <img src={Image} />
            <span>Your Cart is Empty</span>
          </div>
        ) : (
          <div className="products">
            {/* List of added products in the cart */}
            <div className="products__list">
              {productsArray.map((product, index) => (
                <CheckoutProduct
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  key={index}
                />
              ))}
            </div>
            <div className="total__section">
              <div className="total__section__inner">
                <span
                  style={{
                    display: "flex",
                    fontSize: 16,
                    justifyContent: "center",
                    cursor: "default",
                    userSelect: "none",
                  }}
                >
                  <Icon name="check circle" color="green" />
                  Your Order is eligble for free delivery
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: 40,
                    marginBottom: 20,
                    marginTop: 20,
                    backgroundColor: "white",
                  }}
                >
                  <span
                    style={{ fontSize: 20, fontWeight: "600", marginLeft: 20 }}
                  >
                    Subtotal ({productsArray.length}: item)
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name="rupee" size="mini" className="rupee-icon" />
                    <span style={{ fontSize: 18, fontWeight: "600" }}>
                      15598
                    </span>
                  </div>
                </div>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <div
                    className="checkout__btn"
                    onClick={() => setBuyItem (true)}
                  >
                    Proceed to Checkout
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Checkout
