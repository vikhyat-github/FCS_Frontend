import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";

function ProductCard( {product} ) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div class="product_deck" >
      <div class="product-body" style={{backgroundColor:"white"}}>
        <div class="imageContainer" style={{ overflow: "hidden"}}>
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
          <button href="#" class="button">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
