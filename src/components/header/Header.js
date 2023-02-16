import React from "react";
import Cards from "../cards/Cards";
import { data } from "../../helper/data";
import "./Header.css";

const Header = () => {
  console.log(data);
  return (
    <div className="header">
      {data.map((item, index) => (
        <Cards {...item} key={index} />
      ))}
    </div>
  );
};

export default Header;
