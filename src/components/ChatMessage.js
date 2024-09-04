import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({ name, message }) => {

  return (
    <div className="flex items-center py-1">
      <AccountCircleIcon fontSize="large" />
      <span className="font-bold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
