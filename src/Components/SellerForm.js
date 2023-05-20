import React, { useState } from "react";

const SellerForm = (props) => {
  const [shoes, setShoes] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [lsize, setLsize] = useState(0);
  const [msize, setMsize] = useState(0);
  const [ssize, setSsize] = useState(0);

  const shoesHandler = (e) => {
    setShoes(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const lsizeHandler = (e) => {
    setLsize(e.target.value);
  };

  const MsizeHandler = (e) => {
    setMsize(e.target.value);
  };
  const SmallsizeHandler = (e) => {
    setSsize(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const shoesStock = {
      id: Math.random(),
      shoes: shoes,
      description: description,
      price: price,
      lsize: lsize,
      msize: msize,
      ssize: ssize,
    };
    console.log(shoesStock);
    props.stockList(shoesStock);
  };

  return (
    <div>
      <form>
        <label htmlFor="shoes">Shoes Name:</label>
        <input type="text" id="shoes" onChange={shoesHandler} value={shoes} />
        <label htmlFor="about">Description:</label>
        <input
          type="text"
          id="about"
          onChange={descriptionHandler}
          value={description}
        />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" onChange={priceHandler} value={price} />
        <br />
        <label>Quantity Available</label>
        <br />
        <label htmlFor="l-size">L</label>
        <input
          type="number"
          id="l-size"
          onChange={lsizeHandler}
          value={lsize}
        />
        <label htmlFor="M-size">M</label>
        <input
          type="number"
          id="M-size"
          onChange={MsizeHandler}
          value={msize}
        />
        <label htmlFor="s-size">S</label>
        <input
          type="number"
          id="s-size"
          onChange={SmallsizeHandler}
          value={ssize}
        />
        <button onClick={formHandler}>Add Product</button>
      </form>
    </div>
  );
};

export default SellerForm;
