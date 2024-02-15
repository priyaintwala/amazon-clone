import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    async function getPublicKey (){
        const data = await axios.get('http://localhost:3000/api/payment/config')
          setStripePromise(loadStripe(data.data.publishableKey));
    }
    getPublicKey()
  }, []);

  useEffect(() => {
    async function getPaymentInitiate (){
        const data = await axios.post('http://localhost:3000/api/payment/initiate',{orderId:2})
        let { clientSecret } = data.data;
        console.log(clientSecret)
        setClientSecret(clientSecret);
    }
    getPaymentInitiate()
  }, []);

  return (
    <>
      <h4>React Stripe and the Payment Element</h4>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
