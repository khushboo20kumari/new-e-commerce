import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CardCom from "./Card";
import Navbar from "./Navbar";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
export default App;





// import GooglePayButton from './path/to/GooglePayButton';
// import GooglePayButton from 'react-google-pay-button'; // Importing GooglePayButton component


// import GooglePayButton from "@google-pay/button-react"

// function App() {
//   return (
//     <div className="App">
//       <div className={style.div}>

//         <GooglePayButton
//           environment="TEST"
//           paymentRequest={{
//             apiVersion: 2,
//             apiVersionMinor: 0,
//             allowedPaymentMethods: [
//               {
//                 type: 'CARD',
//                 parameters: {
//                   allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                   allowedCardNetworks: ['MASTERCARD', 'VISA'],
//                 },
//                 tokenizationSpecification: {
//                   type: 'PAYMENT_GATEWAY',
//                   parameters: {
//                     gateway: 'example',
//                     gatewayMerchantId: 'exampleGatewayMerchantId',
//                   },
//                 },
//               },
//             ],
//             merchantInfo: {
//               merchantId: '12345678901234567890',
//               merchantName: 'Demo Merchant',
//             },
//             transactionInfo: {
//               totalPriceStatus: 'FINAL',
//               totalPriceLabel: 'Total',
//               totalPrice: '100.00',
//               currencyCode: 'USD',
//               countryCode: 'US',
//             },
//           }}
//           onLoadPaymentData={paymentRequest => {
//             console.log('load payment data', paymentRequest);
//           }}
//         />

//       </div>

//     </div>
//   )
// }
// export default App;

