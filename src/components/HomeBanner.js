import { BiSearch } from "react-icons/bi";
import { HomeBannerWrapper } from "../styleComponents/HomeBannerWrapper";

const HomeBanner = ({ filterSelectMethod, filterSelectVal }) => {
  return (
    <HomeBannerWrapper>
      <div className="search-container">
        <input
          type="text"
          name="query"
          className="search-box"
          value={filterSelectVal.query}
          onChange={filterSelectMethod}
          placeholder="Search"
        />
        <button className="search-button">
          <BiSearch />
        </button>
      </div>
    </HomeBannerWrapper>
  );
};

export default HomeBanner;
