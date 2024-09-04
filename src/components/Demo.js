import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // console.time("Rendering");
  const primeNum = useMemo(()=>{
    // console.log("primeNum calculated:", text);
    return findNthPrime(text);
  }, [text])
  // console.timeEnd("Rendering")

  return (
    <div
      className={
        "col-span-3 m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " bg-black text-red-700")
      }
    >
      <div>
        <input
          className="border border-green-600 bg-red m-2 p-2 cursor-pointer"
          type="button"
          onClick={(e) => setIsDarkTheme(!isDarkTheme)}
          value={"set theme"}
        />
      </div>
      <div>
        <input
          type="number"
          className="border border-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-4 font-bold text-xl">nth prime: {primeNum}</div>
    </div>
  );
};

export default Demo;
