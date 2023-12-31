import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavbarWrapper } from "../styleComponents/NavbarWrapper";
import { BiSearch } from "react-icons/bi";
import { SerachFiledWrapper } from "../styleComponents/SerachFiledWrapper";
const Navbar = ({ filterSelectMethod, filterSelectVal }) => {
  const [showSearch, setShowsearch] = useState(false);
  return (
    <>
      <NavbarWrapper>
        <div className="w-80">
          <a href="/">Logo</a>
          <div className="search-container">
            <input
              type="text"
              name="query"
              className="search-box"
              value={filterSelectVal.query}
              onChange={filterSelectMethod}
              placeholder="Search by title"
            />
            <button className="search-button">
              <BiSearch />
            </button>
          </div>
          <div>
            <span className="nav_cart">
              <AiOutlineShoppingCart />
            </span>
            <span
              href="/"
              className="nav_cart toggle_button"
              onClick={() => setShowsearch(!showSearch)}
            >
              <BiSearch />
            </span>
          </div>
        </div>
      </NavbarWrapper>
      {showSearch && (
        <SerachFiledWrapper>
          <div className="search-container">
            <input
              type="text"
              name="query"
              className="search-box"
              value={filterSelectVal.query}
              onChange={filterSelectMethod}
              placeholder="Search by title"
            />
            <button className="search-button">
              <BiSearch />
            </button>
          </div>
        </SerachFiledWrapper>
      )}
    </>
  );
};

export default Navbar;
