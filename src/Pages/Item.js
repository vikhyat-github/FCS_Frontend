import React, {useState, useEffect} from "react"
import "../Styles/Item1.css"
import { Icon } from "semantic-ui-react"
import Header from '../Components/Header.js'
import Footer from '../Components/Footer'
function Item(){
    const [ product , setProduct] = useState({})
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setProduct(data))
    }, [])
    return(
        <div className="item__page">
            <Header/>
            <div style={{display:'flex', flexDirection:'row', marginTop:100, height:'100%'}}>
                <div className="left__div" >
                    <img src={product.image} alt="product Image" />
                </div>
                <div className="right__div">
                    <div className="info__section">

                        <h2 className="product__title">{product.title}</h2>
                        <p className="product__description">{product.description}</p>
                        <div style={{paddingInline:20, display:'flex', alignItems:'center'}}>
                            <Icon name="rupee" size='big' className="rupee-icon"/> 
                            : 
                            <p style={{fontSize:20, fontWeight:'bold'}}>{product.price}</p> 
                        </div>
                        <div style={{paddingInline:20}}>
                            <div style={styles.button}>
                                Add to Cart
                            </div>
                            <div style={{...styles.button, background:'#fdee02'}}>
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Item

const styles = {
    button: {
        padding:20, 
        background:'#fcc403', 
        width:"30%", 
        textAlign:'center', 
        borderRadius:5, 
        marginBlock:10, 
        fontSize:20, 
        fontWeight:"600", 
        color:'white', 
        cursor:'pointer'
    }
}