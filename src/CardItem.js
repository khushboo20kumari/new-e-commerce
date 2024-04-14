import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CardCom from "./Card";
import Navbar from "./Navbar";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function CardItem() {

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

  const removeToCart = (item) => {
    setCart([...cart, item])
    setTotalPrice(totalPrice - item.price)
    setCount(count - 1)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar count={count} />}>
            <Route path="cartitem" element={<CartItem cart={cart} totalPrice={totalPrice} />} />
            <Route path="/" element={<CardCom data={data} addToCart={addToCart} removeToCart={removeToCart} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default CardItem;
