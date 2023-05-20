import React from "react";

const Cart = (props) => {
  console.log(props.cart);
  return (
    <div>
      <p>Cart</p>
      {props.cart.map((item) => (
        <li>
          {item.shoes}&nbsp;&nbsp;&nbsp;L{item.lsize}&nbsp;&nbsp;&nbsp; M
          {item.msize}&nbsp;&nbsp;&nbsp;S{item.ssize}&nbsp;&nbsp;&nbsp;&nbsp;
          TotalPrice={item.price}
        </li>
      ))}
    </div>
  );
};

export default Cart;
