import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalpage, setTotalpage] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itmesperpage = 15;
  const handleCurrentpage = (idx) => {
    setCurrentPage(idx + 1);
  };
 
  const fetchData = (currentpage, searchTerm) => {
    setLoading(true);
    let url = `https://dummyjson.com/products?limit=${itmesperpage}&skip=${
      (currentpage - 1) * itmesperpage
    }`;
    if (searchTerm!="") {
      url=`https://dummyjson.com/products/search?q=${searchTerm}&limit=${itmesperpage}&skip=${
        (currentpage - 1) * itmesperpage
      }`
    }
    
    fetch(url)
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
  const handlepreviousPage = () => {
    if (currentpage > 1) {
      const previouspage = currentpage - 1;
      setCurrentPage(previouspage);
    }
  };
  const handleNextPage = () => {
    setCurrentPage(currentpage + 1);
  };
  const handlesearchItem = (e) => {
      setSearchTerm(e.target.value);
      console.log(searchTerm)
      
    
  };
  useEffect(() => {
    fetchData(currentpage,searchTerm);
  }, [currentpage, searchTerm]);

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
          <input type="text"
           onChange={handlesearchItem} />
          <div className="grid lg:grid-cols-4 px-3">
            {products.map((product, idx) => (
              <Product product={product} key={idx}></Product>
            ))}
          </div>
          <div className="grid place-items-center mt-5 px-2">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                className="border btn px-3"
                onClick={handlepreviousPage}
                disabled={currentpage === 1}
              >
                Previous
              </button>
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
              <button
                className="border btn px-3"
                onClick={handleNextPage}
                disabled={currentpage === totalpage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
