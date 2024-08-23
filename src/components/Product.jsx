import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  
  const { id, title, images } = product;
  return (
    <div className="card bg-base-100 md:w-64 lg:h-80 shadow">
      <figure>
        <img
          src={images[0] && images[0]}
          alt="Shoes"
          className="md:w-full md:h-full w-44 h-44 object-contain" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm font-bold">
          {title}
          <div className="badge badge-secondary">stock</div>
        </h2>
        
        <div className="card-actions justify-end absolute bottom-0 left-1 pb-2">
          <div className="badge badge-outline"><Link to={`/product/${id}`} state={product}>Details</Link></div>
          <div className="badge badge-outline">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
