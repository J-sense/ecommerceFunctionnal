import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  
  const { id, title, images } = product;
  return (
    <div className="card bg-base-100 w-80 h-96 shadow-xl">
      <figure>
        <img
          src={images[0]}
          alt="Shoes"
          className="w-full h-full object-contain" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base font-bold">
          {title}
          <div className="badge badge-secondary">stock</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline"><Link to={`/product/${id}`} state={product}>Details</Link></div>
          <div className="badge badge-outline">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
