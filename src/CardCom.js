// import { Button } from "@mui/joy";
// import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
// import { Component } from "react";

// class CardCom extends Component {
//     handleSubmit = async (event) => {
//         const { stripe, element } = this.props
//         if (!stripe || !element) return
//         const card = element.getElement(CardElement)
//         const result = await stripe.createToken(card)
//         if (result.error) {
//             console.log(result.error)
//         }
//         else {
//             console.log(result.createToken)
//         }

//     }
//     render() {
//         <>
//             <div className="">
//                 <form>
//                     <CardSection>
//                         <CardSection>
//                             <Button disabled={!this.props.stripe}>Buy Naw</Button>
//                         </CardSection>
//                     </CardSection>
//                 </form>
//             </div>
//         </>
//     }
// }
// export default function InjectCheckout() {
//     return <ElementsConsumer>
//             {
//                 ({stripe, element})=>{
//                     <CardCom ></CardCom>
//                 }
//             }
//     </ElementsConsumer>

// }



import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};