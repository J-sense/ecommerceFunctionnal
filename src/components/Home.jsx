import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalpage, setTotalpage] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);

  const itmesperpage = 15;
  const handleCurrentpage = (idx) => {
    setCurrentPage(idx + 1);
  };
  const fetchData = (currentpage) => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=${itmesperpage}&skip=${
        (currentpage - 1) * itmesperpage
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProducts(data.products);
        setTotalpage(Math.ceil(data.total / itmesperpage));
        setLoading(false);
        // after fetching data set loading to false to hide the loading spinner.
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData(currentpage);
  }, [currentpage]);

  return (
    <>
      {loading ? (
        <div className="grid justify-center items-center h-[80vh]">
          <div className="">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      ) : (
        <div>
          ({" "}
          <div className="grid lg:grid-cols-4 px-3">
            {products.map((product, idx) => (
              <Product product={product} key={idx}></Product>
            ))}
          </div>
          <div className="grid place-items-center mt-5 px-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from({ length: totalpage }, (_, idx) => {
                return (
                  <button
                    key={idx} // Add a key prop for better rendering performance
                    className="border p-2 rounded border-slate-300 hover:bg-slate-200 transition-all duration-200"
                    onClick={() => handleCurrentpage(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
          )
        </div>
      )}
    </>
  );
};

export default Home;
