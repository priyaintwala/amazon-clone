// import {Children, useEffect,useState} from 'react';
// import {
//     PaymentElement,
//     LinkAuthenticationElement,
//     useStripe,
//     useElements
// } from '@stripe/react-stripe-js'

// export default function CheckoutForm(){
//     const stripe = useStripe();
//     const elements = useElements();
//     // console.log(stripe)
//     // console.log(elements)

//     const [email,setEmail] = useState('')
//     const [message,setMesssage]= useState(null);
//     const [isLoading,setIsLoading] = useState(false);

//     // useEffect(()=>{
//     //     if(!stripe){
//     //        return;
//     //     }
        
//     //     const clientSecret = new URLSearchParams(window.location.search).get(
//     //         "payment_intent_client_secret"
//     //     );

//     //     if(!clientSecret){
//     //         return;
//     //     }

//     //     stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent})=>{
//     //         switch(paymentIntent.status){
//     //             case "succeeded":
//     //                 console.log("succeeded")
//     //                 setMesssage('Payment successful');
//     //                 break;
//     //             case "processing":
//     //                 console.log("processing")
//     //                 setMesssage('Payment processing');
//     //                 break;
//     //             case "requires paymenyt method":
//     //                 setMesssage('your payment was not successful ,please try again');
//     //                 break;
//     //             default:
//     //                 setMesssage('Something went wrong');
//     //                 break;
//     //         }  
//     //     })
//     // },[stripe])

//     const handleSubmit = async (e) =>{
//         e.preventDefault();
    
//     if(!stripe || !elements){
//         return
//     }

//     setIsLoading(true)

//     fetch('http://localhost:3000/api/payment/callback',{
//         method:'POST',
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body: JSON.stringify({ orderId: 3, status:"success", paymentMethod:"pm_card_visa" , transactionId:"pi_3NzWk7SJNckAo3cY12jrCglg" })
//       })
//       .then(res=>res.json())
//       .then(data=>console.log(data))

//     const data = await stripe.confirmPayment({
//         elements,
//         confirmParams:{
//             return_url:"http://localhost:5173"
//         }
//     })
//     console.log(data,"data")

//     // if(error.type === 'card_error' || error.type === 'validation_error'){
//     //     setMesssage(error.message)
//     // }else{
//     //     setMesssage("an unexpected error occured")
//     // }
//     setIsLoading(false)

   
//  }
//  const handleEmailChange = e =>{
//     console.log(e)
//     setEmail(e)
//  }
 
//  const paymentElementOptions = {
//     layout :"tabs"
//  }

//  return(
//     <form id="payment-form" onSubmit={handleSubmit}>
//         <LinkAuthenticationElement id="link-authentication-element" onChange={handleEmailChange} />
//         <PaymentElement id="payment-element" options={paymentElementOptions} />
//         <button disabled={isLoading || !stripe || !elements} id='submit' >
//            {/* <span id='button-text'> */}
//                {isLoading ? <div className='spinner' id="spinner"></div>:"Pay now" }
//            {/* </span> */}
//         </button>
//         {message && <div id="payment-message">{message}</div>}
//     </form>
//  )
// }

import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    
    const data = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `http://localhost:5173/completion`,
      },
      redirect:'if_required'
    });

    console.log(data)
    // console.log(error)
    if (data.error === "card_error" || data.error === "validation_error") {
      setMessage(data.error.message);
    } 
    else if(data.paymentIntent && data.paymentIntent.status === 'succeeded'){
      setMessage('Payment status'+data.paymentIntent.status)
    }
    else {
      // console.log(error)
      // console.log(error.type)
      console.log(data.error)
      setMessage("An unexpected error occured.",data.error);
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
        {/* Pay Now */}
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


