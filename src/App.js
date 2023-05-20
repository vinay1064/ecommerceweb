import { useState } from "react";
import BuyerList from "./Components/BuyerList";
import SellerForm from "./Components/SellerForm";
import Cart from "./Components/Cart";

function App() {
  const [stockData, setStockData] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const stockList = (item) => {
    const shoesdata = [...stockData];
    shoesdata.push(item);
    setStockData(shoesdata);
  };

  const buyLargeShoes = (shoe) => {
    const myCart = [...cart];
    const myStock = [...stockData];
    const myStockItem = myStock.find((item) => item.id === shoe.id);
    if (myStockItem.lsize > 0) {
      const existingItem = myCart.find((item) => item.id === shoe.id);
      if (!existingItem) {
        myCart.push({
          id: shoe.id,
          shoes: shoe.shoes,
          description: shoe.description,
          price: shoe.price,
          lsize: 1,
          msize: !myCart.msize ? 0 : myCart.msize,
          ssize: !myCart.ssize ? 0 : myCart.ssize,
        });
      } else {
        existingItem.lsize++;
        existingItem.price = +existingItem.price + +shoe.price;
      }
      setCart(myCart);
      myStockItem.lsize--;
    } else {
      alert("L size is not available");
    }
  };

  const buyMediumShoes = (shoe) => {
    const myCart = [...cart];
    const myStock = [...stockData];
    const myStockItem = myStock.find((item) => item.id === shoe.id);
    if (myStockItem.msize > 0) {
      myStockItem.msize--;
      const existingItem = myCart.find((item) => item.id === shoe.id);
      if (!existingItem) {
        myCart.push({
          id: shoe.id,
          shoes: shoe.shoes,
          description: shoe.description,
          price: shoe.price,
          lsize: !myCart.lsize ? 0 : myCart.lsize,
          msize: 1,
          ssize: !myCart.ssize ? 0 : myCart.ssize,
        });
      } else {
        existingItem.msize++;
        existingItem.price = +existingItem.price + +shoe.price;
      }
      setCart(myCart);
    } else {
      alert("M size is not available");
    }
  };

  const buySmallShoes = (shoe) => {
    const myCart = [...cart];
    const myStock = [...stockData];
    const myStockItem = myStock.find((item) => item.id === shoe.id);
    if (myStockItem.ssize > 0) {
      const existingItem = myCart.find((item) => item.id === shoe.id);
      if (!existingItem) {
        myCart.push({
          id: shoe.id,
          shoes: shoe.shoes,
          description: shoe.description,
          price: shoe.price,
          lsize: !myCart.lsize ? 0 : myCart.lsize,
          msize: !myCart.msize ? 0 : myCart.msize,
          ssize: 1,
        });
      } else {
        existingItem.ssize++;
        existingItem.price = +existingItem.price + +shoe.price;
      }
      setCart(myCart);
      myStockItem.ssize--;
    } else {
      alert("S size is not available");
    }
  };
  return (
    <div>
      <SellerForm stockList={stockList} />
      <BuyerList
        stockData={stockData}
        buyLarge={buyLargeShoes}
        buyMedium={buyMediumShoes}
        buySmall={buySmallShoes}
      />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
