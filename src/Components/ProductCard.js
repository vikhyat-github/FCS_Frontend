import { colors, Hidden } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { useEffect, useState } from "react";
import "../Styles/ProductCard.css";

function ProductCard() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [product, setPoduct] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/3")
      .then((res) => res.json())
      .then((data) => {
        setPoduct(data);
        console.log(data);
      });
  }, []);
  return (
    <div class="product-deck">
      <div class="product-body">
        <div class="imageContainer" style={{ overflow: "hidden" }}>
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
        <button href="#" class="button">
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
