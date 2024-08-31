import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNameList = [
    "All",
    "Movies",
    "Music",
    "Games",
    "News",
    "Cricket",
    "Soccer",
    "Movies",
    "Music",
    "Games",
    "News",
    "Cricket",
    "Soccer",
    "Movies",
    "Music",
    "Games",
    "News",
  ];
  return (
    <div className="flex">
      {buttonNameList.map((label, index) => (
        <Button key={index} label={label} />
      ))}
    </div>
  );
};

export default ButtonList;
