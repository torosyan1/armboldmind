import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import "./header.css";

 const Header = () => {
  return (
    <>
      <div className="contener">
        <MenuIcon className="MenueIcon" />
        <div className="leftIconeHeader">
          <SearchIcon className="searchIcone" />
          <PersonIcon className="personIcone" />
        </div>
      </div>
   
    </>
  );
};

export default Header;
