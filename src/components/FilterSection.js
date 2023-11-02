import { FilterWrapper } from "../styleComponents/FilterWrapper";

const FilterSection = ({
  filterSelectMethod,
  filterSelectVal,
  resetFilterMethod,
}) => {
  // console.log(filterSelectVal);

  return (
    <>
      <FilterWrapper>
        <div className="w-80">
          {/* <h1>Filter By:</h1> */}
          <div className="">
            <select
              name="filterPrice"
              value={filterSelectVal.filterPrice}
              onChange={filterSelectMethod}
            >
              <option value="select">Select Price</option>
              <option value="all">All</option>
              <option value="0-399">0 - 399</option>
              <option value="400-699">400 - 699</option>
              <option value="700-999">700 - 999</option>
            </select>
            <select
              name="filterCategory"
              value={filterSelectVal.filterCategory}
              onChange={filterSelectMethod}
            >
              <option value="select">Select Category</option>
              <option value="all">All</option>
              <option value="home_and_furniture">Home & Furniture</option>
              <option value="electronic">Electronic</option>
              <option value="grocery">Grocery</option>
            </select>
            <select
              name="filterAvailiability"
              value={filterSelectVal.filterAvailiability}
              onChange={filterSelectMethod}
            >
              <option value="select">Select Availability</option>
              <option value="all">All</option>
              <option value="1">In-Stock</option>
              <option value="0">Out of stock</option>
            </select>
            <button onClick={resetFilterMethod}>Reset Filter</button>
          </div>
        </div>
      </FilterWrapper>
    </>
  );
};

export default FilterSection;
