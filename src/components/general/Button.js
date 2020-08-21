import React from "react";

const Button = (props) => {
  return (
    <button className="button-primary" {...props}>
      {props.label}
    </button>
  );
};

export default Button;
