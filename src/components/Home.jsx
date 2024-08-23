import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData =()=>{
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false); // after fetching data set loading to false to hide the loading spinner.
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
  fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="grid justify-center items-center h-[80vh]">
          <div className="">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      )}
      <div className="grid lg:grid-cols-3 w-[90%] mx-auto gap-3">
        {products.map((product, idx) => (
          <Product product={product} key={idx}></Product>
        ))}
      </div>
    </>
  );
};

export default Home;
