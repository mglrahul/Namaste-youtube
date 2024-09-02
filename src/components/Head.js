import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheResultData = useSelector(store => store.search.cache)

  useEffect(() => {
  
    /* 
      make an api call after every key press
      but if the difference between 2 api call is < 200ms 
      decline the api call
    */

    const timer = setTimeout(() => {
      // console.log("cacheResultData-1", cacheResultData, searchQuery)
      if(cacheResultData[searchQuery]){
        // console.log("cacheResultData.searchQuery", cacheResultData[searchQuery])
        setSuggestions(cacheResultData[searchQuery]);
      }else{
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /* 
    key - i
      render the component
      useEffect call
      start timer => make api call after 200ms

    key - ip
      destroy the component(useEffect return method)
      re-render the component
      useEffect call
      start timer => make api call after 200ms

  
  */

  const getSearchSuggestion = async () => {
    // console.log("getSearchSuggestion", searchQuery);
    if(!searchQuery) return null;
    

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const str = await data.text();
    const arr = JSON.parse(
      str.substring(str.indexOf("["), str.indexOf("])") + 1)
    );
    const suggestions = arr[1].map((item) => item[0]);
    // console.log("suggestions", arr[1], suggestions);
    setShowSuggestions(true);
    setSuggestions(suggestions);
    const cacheData = {
      [searchQuery]: suggestions
    };
    // console.log("cacheData", cacheData)
    dispatch(cacheResults(cacheData))
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // console.log("search", searchQuery);
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
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-3 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-100">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && <div className="absolute bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray">
            <ul >
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="text-xl px-3 py-2 shadow-sm hover:bg-gray-100"
                >
                  <SearchIcon />
                  {item}
                </li>
              ))}
            </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Head;
