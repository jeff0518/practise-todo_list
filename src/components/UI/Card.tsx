import React from "react";

const Card = (props) => {
  return (
    <div className={props.classStyle}>
      {props.children}
    </div>
  );
};

export default Card;
