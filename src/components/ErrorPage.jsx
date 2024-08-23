import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error.statusText)
  return (
   <div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">{error.ErrorPag}</h1>
        <p className="text-xl text-gray-600 mb-6">{error.statusText}</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
   </div>
  );
};

export default ErrorPage;
