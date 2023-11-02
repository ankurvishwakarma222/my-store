import React, { useEffect, useState } from "react";
import { ProductWrapper } from "../styleComponents/ProductWrapper";
import { Button } from "../styleComponents/Button";
import data from "../Api/data";
const ProductCard = ({ filters }) => {
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = Math.min(firstIndex + recordsPerPage, totalRecords);

  const records = data.slice(firstIndex, lastIndex);
  const [npage, setNPage] = useState(Math.ceil(data.length / recordsPerPage));
  const [numbers, setNumbers] = useState([...Array(npage + 1).keys()].slice(1));
  console.log(filters);
  const { query, filterPrice, filterCategory, filterAvailiability } = filters;
  const [filterData, setFilterData] = useState(records);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    let filteredData = data;

    // Apply the query filter
    if (query !== "") {
      filteredData = filteredData.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    // Apply the price filter
    if (
      filterPrice !== "select" &&
      filterPrice !== "all" &&
      filterPrice !== ""
    ) {
      const priceRange = filterPrice.split("-");
      filteredData = filteredData.filter((product) => {
        const productPrice = product.price;
        return (
          productPrice >= Number(priceRange[0]) &&
          productPrice <= Number(priceRange[1])
        );
      });
    }

    // Apply the category filter
    if (
      filterCategory !== "select" &&
      filterCategory !== "all" &&
      filterCategory !== ""
    ) {
      filteredData = filteredData.filter((product) => {
        return product.type === filterCategory;
      });
    }

    // Apply the availability filter
    if (
      filterAvailiability !== "select" &&
      filterAvailiability !== "all" &&
      filterAvailiability !== ""
    ) {
      filteredData = filteredData.filter((product) => {
        const filterAvailiabilityCheck =
          Number(filterAvailiability) === 1 ? true : false;
        return product.status === filterAvailiabilityCheck;
      });
    }

    // Update the state based on the filtered data
    if (filteredData.length > 0) {
      setFilterData(filteredData.slice(firstIndex, lastIndex));
      setNPage(Math.ceil(filteredData.length / recordsPerPage));
      setNumbers(
        [
          ...Array(Math.ceil(filteredData.length / recordsPerPage) + 1).keys(),
        ].slice(1)
      );
    } else if (
      filteredData.length === 0 &&
      (query !== "" ||
        (filterPrice !== "select" &&
          filterPrice !== "all" &&
          filterPrice !== "") ||
        (filterPrice !== "select" &&
          filterCategory !== "all" &&
          filterCategory !== "") ||
        (filterAvailiability !== "select" &&
          filterAvailiability !== "all" &&
          filterAvailiability !== ""))
    ) {
      setFilterData(filteredData);
    } else {
      setFilterData(records);
      setNPage(Math.ceil(totalRecords / recordsPerPage));
      setNumbers([...Array(totalPages + 1).keys()].slice(1));
    }
  }, [currentPage, query, filterPrice, filterCategory, filterAvailiability]);

  return (
    <>
      <ProductWrapper>
        <div className="w-80">
          {filterData &&
            filterData.map((item) => {
              const { id, img, title, price, status, desc } = item;
              return (
                <div key={id}>
                  <div>
                    <img src={img} alt={title} />
                  </div>
                  <div>
                    <h2>{title}</h2>
                    <p> &#8377; {price}</p>
                    <p>{desc}</p>
                    {status ? (
                      <p style={{ color: "green" }}>In Stock</p>
                    ) : (
                      <p style={{ color: "red" }}>Out Of Stock</p>
                    )}
                    <div>
                      <Button padding="1rem 2rem" fontSize="1.3rem">
                        Buy Now
                      </Button>
                      <Button padding="1rem 2rem" fontSize="1.3rem">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {npage > 1 && (
          <div className="w-80 pagination">
            <ul>
              {currentPage > 1 && <li onClick={prePage}>Previous</li>}
              {numbers.map((n, i) => (
                <li
                  key={i}
                  className={`${currentPage === n ? "pageActive" : ""}`}
                  onClick={() => changePage(n)}
                >
                  {n}
                </li>
              ))}
              {filterData.length >= recordsPerPage && (
                <li onClick={nextPage}>Next</li>
              )}
            </ul>
          </div>
        )}
        {filterData.length <= 0 && (
          <p className="error_msg">NO product found</p>
        )}
      </ProductWrapper>
    </>
  );
};

export default ProductCard;
