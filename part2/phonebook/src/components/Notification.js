import React from "react";

const successColor = { color: "green" };
const errorColor = { color: "red" };

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="notification" style={successColor}>
      {message}
    </div>
  );
};

export default Notification;
