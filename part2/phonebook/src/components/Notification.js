import React from "react";

const successColor = { color: "green" };
const errorColor = { color: "red" };

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    const text = message.error || message.success;
    const color = message.error ? errorColor : successColor;

    return (
      <div className="notification" style={color}>
        {text}
      </div>
    );
  }
};

export default Notification;
