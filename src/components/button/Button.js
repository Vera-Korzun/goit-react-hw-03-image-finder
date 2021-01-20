import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btnLoad">
        Load more
      </button>
    </>
  );
};

export default Button;
