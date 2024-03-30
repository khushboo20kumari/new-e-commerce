// import { useState,useEffect } from "react";
// import CartItem from "./CartItem";
// import CartPrice from "./CartPrice";

// function Data() {

//     const [data, setData] = useState([])
//     const [cart, setCart] = useState([])
//     const [totalPrice, setTotalPrice] = useState(0)
//     const [count,setCount]=useState(0)

//     const fetchData = () => {
//         fetch("https://fakestoreapi.com/products").then((res) => {
//             return res.json()
//         }).then((res) => {
//             setData(res)
//         })
//     }
//     useEffect(() => {
//         fetchData()
//     }, [])


//     const addToCart = (item) => {
//         setCart([...cart, item])
//         setTotalPrice(totalPrice + item.price)
//         setCount(count+1)

//     }
//     return (
//         <>
//             {data.map((item) => (
//                 <>
//                     <p>{item.title}</p>
//                     <button onClick={() => addToCart(item)}>add to cart</button>
//                 </>
//             ))}
//             <CartItem cart={cart} />
//             <CartPrice totalPrice={totalPrice} count={count}></CartPrice>
//         </>
//     )
// }
// export default Data;