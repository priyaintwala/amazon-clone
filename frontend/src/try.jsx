
  console.log('event data object:', event.data.object)
  console.log('event object id:', event.data.object.id)


  
  import { useState } from 'react';
  import {loadStripe} from '@stripe/stripe-js';
  import { Elements } from '@stripe/react-stripe-js';
  
  import './App.css'
  import CheckoutForm from './CheckoutForm';
  
  const stripePromise = loadStripe(
    "pk_test_51NuUklSJNckAo3cY2mnlUmFvtNCvdQYp2OebbCJJRqGu0JfjZ6ia5Prf2Nx3bHs0K23PfuzlGeH0gGkBhGi4j5rI00V8WNvAIt"
  )
  
  function App() {
    
    const [clientSecret,setClientSecret] = useState('')
  
    const appearance ={
      theme:"stripe"
    }
  
    const options ={
      clientSecret,
      appearance
    }

    
    const handleClick = () => {
      fetch('http://localhost:3000/api/payment/initiate',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ orderId:3 })
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data.clientSecret))
    }
  
    return (
      <>
      <div className='App'>
      <button onClick={handleClick}>Checkout</button>
      {
        clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
      </>
    )
  }
  
  export default App
  
  
  
  
