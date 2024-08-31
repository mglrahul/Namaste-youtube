import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="px-3 pt-1 pb-2 m-2 bg-black text-white rounded-lg text-center"
    >
      {label}
    </button>
  );
};

export default Button;
