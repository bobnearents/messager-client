import React from "react";

const MessageContext = React.createContext({
  messages: [],
  rooms: [],
  room_id: 1
});

export default MessageContext;
