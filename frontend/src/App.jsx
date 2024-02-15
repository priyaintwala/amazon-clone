// import React from 'react';

// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// import Check from './Check';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_test_51NuUklSJNckAo3cY2mnlUmFvtNCvdQYp2OebbCJJRqGu0JfjZ6ia5Prf2Nx3bHs0K23PfuzlGeH0gGkBhGi4j5rI00V8WNvAIt");


// function App() {
  
 

//   return (
//     <Elements stripe={stripePromise}>
//        <Check />
//     </Elements>
//   )
// }

// export default App

import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;







