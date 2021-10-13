import React from 'react'
import "../Styles/CheckoutProduct.css"
function CheckoutProduct({product, quantity, setQuantity}) {
    return (
        <div className="product__row" >
            <div style={{display:'flex', flexDirection:'row', width:"85%"}}>
                <div style={{height:250, padding:10, alignItems:'center', display:'flex'}}>
                    <img src={product.image} width={120}/>

                </div>
                <div className="product__info">
                    <p className="product__title">{product.title}</p>
                    <p className="product__description">{product.description}</p>
                    <div className="controls">
                        <span className="add__button" onClick={()=>{setQuantity(quantity+1)}}>+</span>
                        <span>{quantity}</span>
                        <span className="remove__button" onClick={()=>{if(quantity!==0)setQuantity(quantity-1)}}>-</span>
                    </div>
                </div>
            </div>
            <div style={styles.productRowLeft}>
                <p style={styles.productPrice}>$ {product.price}</p>
            </div>
        </div>

    )
}

const styles = {
    productRowLeft:{display:'flex', justifyContent:'center', width:'15%', height:250, padding:10},
    productPrice:{marginTop:20, fontSize:20, fontWeight:'600'},
    product__image:{}
}

export default CheckoutProduct
