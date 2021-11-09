import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";

function ProductCard( {product} ) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="product_deck" >
      <div className="product-body" style={{backgroundColor:"white"}}>
        <div className="imageContainer" style={{ overflow: "hidden"}}>
          <img src={product.image} alt="..." />
        </div>
        <h2>{product.title}</h2>
        <div className="price-Heart">
          <p>₹{product.price}</p>
          <i
            onClick={handleClick}
            className={click ? "fa fa-heart fa-2x" : "fa fa-heart-o fa-2x"}
          ></i>
        </div>
        <Link to={`/product${product.id}`}>
          <button href="#" className="button">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
