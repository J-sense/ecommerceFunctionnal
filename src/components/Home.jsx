import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalpage, setTotalpage] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);

  const itmesperpage = 10;
  const handleCurrentpage = (idx) => {
    setCurrentPage(idx + 1);
  };
  const fetchData = (currentpage) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${itmesperpage}&skip=${(currentpage-10)*itmesperpage}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          return res.json()
        }
      })
      .then((data) => {
        setProducts(data.products);
        setTotalpage(Math.ceil(data.total / itmesperpage));
        setLoading(false);
        console.log(totalpage); // after fetching data set loading to false to hide the loading spinner.
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData(currentpage);
  }, [currentpage]);

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
      <div className="mx-auto w-[90%]">
        {Array.from({ length: totalpage }, (_, idx) => {
          return (
            <button
              className="border p-2 mt-5 border border-slate-300 rounded"
              onClick={() => handleCurrentpage(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
