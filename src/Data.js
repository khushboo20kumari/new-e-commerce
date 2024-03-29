// import { useEffect, useState } from "react"
// function EcommerceApp() {
//     const [data, setData] = useState([])
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

import { useEffect, useState } from "react";

  
//     return (
//         <>
//             {data.map((item) => (
//                 <>
//                     <p>{item.title}</p>
                    
//                     <button>add to card</button>
//                 </>
//             ))}
            


//         </>
//     )
// }
// export default EcommerceApp;



// import React, { useEffect, useState } from "react";

// function EcommerceApp() {
//     const [data, setData] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);

//     const fetchData = () => {
//         fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((res) => setData(res))
//             .catch((error) => console.error("Error fetching products:", error));
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const addToCart = (item) => {
//         setCart([...cart, item]);
//         setTotalPrice(totalPrice + item.price);
//     };

//     // console.log(cart,"cart")

//     return (
//         <>
//             {data.map((item) => (
//                 <div key={item.id}>
//                     <p>{item.title}</p>
//                     <p>${item.price}</p>
//                     <button onClick={() => addToCart(item)}>Add to Cart</button>
//                 </div>
//             ))}
//             <div>
//                 <h2>Shopping Cart</h2>
//                 <ul>
//                     {cart.map((item, index) => (
//                         <li key={index}>
//                             {item.title} - ${item.price}
//                         </li>
//                     ))}
//                 </ul>
//                 <p>Total Price: ${totalPrice}</p>
//             </div>
//         </>
//     );
// }

// export default EcommerceApp;



function Data(){

    const [data,setData]=useState([])
    const [cart,setCart]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)

    const fetchData=()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>{
            return res.json()
        }).then((res)=>{
            setData(res)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])


    const addToCart=(item)=>{
        setCart([...cart,item])
        setTotalPrice(totalPrice+item.price)

    }
    return(
        <>
        {data.map((item)=>(
            <>
              <p>{item.title}</p>
              <button onClick={()=>addToCart(item)}>add to cart</button>
            </>
        ))}
        
          
        </>
    )
}
export default Data;