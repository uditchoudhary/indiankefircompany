import React from "react";
import "./ProductCard.css";
const ProductCard = ({product}) => {
    return (
      <>
        <div className="card-wrapper ">
          <div className="card-image d-flex justify-content-center">
            <img src={product.image} alt={product.name} className="image" />
          </div>
          <div className="card-category d-flex justify-content-center my-2">
            {product.category}
          </div>
          <div className="card-name  d-flex justify-content-center ">
            {product.name}
          </div>
          <div className="card-price  d-flex justify-content-center ">
            Starts from {product.price}
          </div>
          <div className="card-product-size  d-flex justify-content-center ">
            Size:
            <select name="size" id="size" className="size-dropdown">
               {product.availableSize.map((i,key) => {
                   return <option key={key} value={i}>{i}</option>;
               })} 
              
            </select>
          </div>
          <div className="card-cart d-flex justify-content-center mt-3 ">
            <button className="card-btn">Add to Cart</button>
          </div>
        </div>
      </>
    );
}

export default ProductCard;