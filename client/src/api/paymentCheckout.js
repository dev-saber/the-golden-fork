import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export const paymentCheckout = async (customerInfo, orderInfo) => {
    // const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    // try {
    //   const response = await axios.post("http://localhost:3001/checkout", {
    //     // customer: customerInfo,
    //     items: orderInfo,
    //   });
    //   const stripe = await stripePromise;
  
    //   await stripe.redirectToCheckout({ sessionId: response.data.id });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  
