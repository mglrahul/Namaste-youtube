import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <MenuIcon
          fontSize="large"
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="flex col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          <SearchIcon />
        </button>
      </div>
      <div className="col-span-1">
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Head;
