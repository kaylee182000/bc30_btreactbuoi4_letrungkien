//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  let [cart, setCart] = React.useState([]);

  let addToCart = (addTo) => {
    setCart((preCart) => {
      //let arr = preCart.push()
      //preCart.push(addTo)
      return [...preCart, addTo];
    });
  };
  let deleteCart = (itemCLick) => {
    // let cartUpdate = cart
    let cartUpdate = cart.filter((p) => p.maSP !== itemCLick);
    setCart((preCart) => (preCart = cartUpdate));
    // setCart((preCart) => {
    //   let cartUpdate = preCart
    //   cartUpdate = cartUpdate.filter((p) => p.id !== itemCLick)
    //   console.log(cartUpdate)
    //   return [...cartUpdate]
    // })
  };
  return (
    <div className="App">
      <h1 className="text-center text-light bg-dark p-3">BÀI TẬP GIỎ HÀNG</h1>
      <Cart cart={cart} deleteCart={deleteCart}/>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
