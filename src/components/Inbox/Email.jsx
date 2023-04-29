import React from "react";

const Email = ({ expeditor, messageTitle, message, timestamp }) => {
  return (
    <div className="email-cont">
      <p className="expeditor"> {expeditor}</p>
      <div className="msg-cont">
        <p className="title">{messageTitle} -</p>
        <p className="msg"> {message}</p>
      </div>

      <p className="time">{timestamp}</p>
    </div>
  );
};

export default Email;
