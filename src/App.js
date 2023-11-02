import { useState } from "react";
import FilterSection from "./components/FilterSection";
import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [filterselect, setFilterSelect] = useState({
    filterPrice: "",
    filterCategory: "",
    filterAvailiability: "",
    query: "",
  });
  const handleSelect = (e) => {
    setFilterSelect((pre) => {
      var name = e.target.name;
      var value = e.target.value;
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const resetFilter = () => {
    setFilterSelect({
      filterPrice: "",
      filterCategory: "",
      filterAvailiability: "",
      query: "",
    });
  };
  return (
    <>
      <Navbar
        filterSelectVal={filterselect}
        filterSelectMethod={handleSelect}
      />
      {/* <HomeBanner /> */}
      <FilterSection
        filterSelectVal={filterselect}
        filterSelectMethod={handleSelect}
        resetFilterMethod={resetFilter}
      />
      <ProductCard filters={filterselect} />
    </>
  );
}

export default App;
