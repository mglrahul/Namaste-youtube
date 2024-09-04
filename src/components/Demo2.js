import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [Y, setY] = useState(0);
  const ref = useRef(0);
  const ref2 = useRef(null);

  useEffect(()=>{
    ref2.current = setInterval(() => {
        console.log("namaste react:", Math.random())
    }, 1000);

    return () => clearInterval(ref2.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let x = 10;

  console.log("rendering...")
  return (
    <div className="col-span-5 m-4 p-2 w-96 h-96 border border-black">
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log("x:", x);
          }}
        >
          Increase x
        </button>
        <span>Let x = {x}</span>
      </div>

      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            setY(Y+1)
          }}
        >
          Increase Y
        </button>
        <span>Let Y = {Y}</span>
      </div>

      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref.current:", ref.current)
          }}
        >
          Increase Ref
        </button>
        <span>Let Ref = {ref.current}</span>
      </div>
      <div>
        <button className="bg-red-100 p-2 m-2 rounded-lg" onClick={()=>{
            clearInterval(ref2.current);
        }}>Stop Timer</button>
      </div>
    </div>
  );
};

export default Demo2;
