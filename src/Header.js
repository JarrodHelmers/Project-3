import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://preview.redd.it/v2zkc3pfufr41.png?width=960&crop=smart&auto=webp&s=0d22a8ded97174c06d09ef618a55938fdfa77bad"
      />

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />

        <div className="header-nav">
          <div className="header-option">
            <span className="header-optionLineOne">Hello Guest</span>
            <span className="header-optionLineTwo">Sign In</span>
          </div>

          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">and Orders</span>
          </div>

          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
