import React from "react";

const Oblik = ({ duljina, visina, boja }) => {
  return (
    <div
      style={{
        width: duljina + "px",
        height: visina + "px",
        backgroundColor: boja,
      }}></div>
  );
};

export default Oblik;
