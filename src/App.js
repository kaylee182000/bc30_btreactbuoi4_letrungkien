//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  let [cart, setCart] = React.useState([]);
  let updownTotalAmount = (maSP, updown) => {
    let updateCart = [...cart];
    let index = updateCart.findIndex((item) => item.maSP === maSP);
    if (updown) {
      updateCart[index].soLuong += 1;
    } else {
      if (updateCart[index].soLuong > 1) {
        updateCart[index].soLuong -= 1;
      }
    }
    setCart((preCart) => (preCart = updateCart));
  };
  let addToCart = (addTo) => {
    let itemCart = {
      maSP: addTo.maSP,
      tenSP: addTo.tenSP,
      giaBan: addTo.giaBan,
      hinhAnh: addTo.hinhAnh,
      soLuong: 1,
    };
    let updateCart = [...cart];
    let index = updateCart.findIndex((sp) => sp.maSP === itemCart.maSP);
    if (index !== -1) {
      updateCart[index].soLuong += 1;
    } else {
      updateCart.push(itemCart);
    }
    setCart((preCart) => (preCart = updateCart));
  };
  let deleteCart = (itemCLick) => {
    // let cartUpdate = cart
    let cartUpdate = cart.filter((p) => p.maSP !== itemCLick);
    setCart((preCart) => (preCart = cartUpdate));
  };
  let totalAmount = cart.reduce((totalAmount,item)=>{
    return totalAmount += item.soLuong
  },0)
  return (
    <div className="App">
      <h1 className="text-center text-light bg-dark p-3">BÀI TẬP GIỎ HÀNG</h1>
      <Cart
        cart={cart}
        deleteCart={deleteCart}
        updownTotalAmount={updownTotalAmount}
        totalAmount={totalAmount}
      />
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
