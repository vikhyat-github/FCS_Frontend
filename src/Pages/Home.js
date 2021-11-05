import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import "../Styles/Home.css";
import Footer from "../Components/Footer";
import { useStateValue } from "../StateProvider";
import Login from "./Login";
function Home() {
  const [{user}, dispatch] = useStateValue()
  return( 
    !user ? <Login /> :
  <div className="Home">
    <div className="home-header">
      <Header />
    </div>
    {/* Banner */}
    <div style={{marginTop:100}}>
      <div className="home-banner">
        <Banner />
        {/* <Banner />
                <Banner /> */}
      </div>
      <div className="product" style={{marginBottom:40}}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    
    <Footer />
  </div> 
  );    
}

export default Home;
