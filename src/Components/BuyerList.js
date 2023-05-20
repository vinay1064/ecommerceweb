import React, { useEffect, useState } from "react";

const BuyerList = (props) => {
  // console.log(props.stockData);

  const largeHandler = (item) => {
    
    props.buyLarge(item);
  };
  const mediumHandler = (item) => {
    props.buyMedium(item);
  };
  const smallHandler = (item) => {
    props.buySmall(item);
  };

  return (
    <div>
      {props.stockData.map((item) => (
        <span
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
          key={Math.random()}
        >
          {item.shoes}&nbsp;&nbsp;&nbsp;&nbsp;
          {item.description}&nbsp;&nbsp;&nbsp;
          {item.price}
          <button onClick={() => largeHandler(item)}>
            Buy Large({item.lsize})
          </button>
          <button onClick={() => mediumHandler(item)}>
            Buy Medium({item.msize})
          </button>
          <button onClick={() => smallHandler(item)}>
            Buy Small({item.ssize})
          </button>
        </span>
      ))}
    </div>
  );
};

export default BuyerList;
