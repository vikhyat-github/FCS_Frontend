import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import "../Styles/Home.css";
import Footer from "../Components/Footer";

function Home() {
  const [Products, setProducts] = useState([])
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_STORE}/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }, [])
  return( 
    <div className="Home">
      {/* <div className="home-header"> */}
        <Header />
      {/* </div> */}
      {/* Banner */}
      <div style={{marginTop:100, width:"100vw"}}>
        <div className="home-banner" style={{width:"100vw"}}>
          <Banner />
        </div>
        <div className="product__section" style={{marginBottom:40}}>
          {Products.map((product, idx) => {
            return <ProductCard product={product} key={idx}/>
          })}
        </div>
      </div>
      
      <Footer />
    </div> 
  );    
}

export default Home;
