import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateUniqueName, generateMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMsg = useSelector((store) => store.chat.message);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMessage({
          name: generateUniqueName(),
          message: generateMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="h-[540px] pl-2 m-2 border border-gray rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMsg.map((chatItem, index) => (
          <ChatMessage
            key={index}
            name={chatItem.name}
            message={chatItem.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("liveMessage", liveMessage);
          dispatch(
            addMessage({
              name: "Rahul Mangal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 w-4/5 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="pl-2 text-green-500">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
