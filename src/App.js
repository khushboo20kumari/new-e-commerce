import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Card,Typography } from "@mui/joy";
// import CartPrice from "./CartPrice";
import CardCom from "./Card";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [count, setCount] = useState(0)

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      return res.json()
    }).then((res) => {
      setData(res)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])


  const addToCart = (item) => {
    setCart([...cart, item])
    setTotalPrice(totalPrice + item.price)
    setCount(count + 1)

  }

  const removeToCart=(item)=>{
    setCart([...cart,item])
    setTotalPrice(totalPrice-item.price)
    setCount(count-1)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar count={count}/>}>
            <Route path="cartitem" element={<CartItem cart={cart} totalPrice={totalPrice}/>} />
            {/* <Route path="cartPrice" element={<CartPrice totalPrice={totalPrice}/>} /> */}
            <Route path="/" element={<CardCom data={data} addToCart={addToCart} removeToCart={removeToCart} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <Card data={data} addToCart={addToCart} /> */}

      {/* <CartItem cart={cart} /> */}
      {/* <CartPrice totalPrice={totalPrice} count={count}></CartPrice> */}
    </div>
  )
}
export default App;

