import React from "react";
import { useLocation } from "react-router-dom";

const ProoductDetails = () => {
  const { state: product } = useLocation();
  console.log(product);
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-gray-800">
              ${product.price}
            </span>
            <span className="ml-4 px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full">
              {product.discountPercentage}% Off
            </span>
          </div>
          <p className="text-gray-600 mb-2">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Stock:</strong> {product.stock} units available
          </p>
          <p className="text-gray-600 mb-2">
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Shipping Information:</strong> {product.shippingInformation}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
            {product.dimensions.height} x {product.dimensions.depth} cm
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Weight:</strong> {product.weight} kg
          </p>

          {/* Add to Cart Button */}
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      {product.images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Image Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}

      {/* QR Code */}
      {product.meta.qrCode && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">QR Code</h2>
          <img
            src={product.meta.qrCode}
            alt="QR Code"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ProoductDetails;
