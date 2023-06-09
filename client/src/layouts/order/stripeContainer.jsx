import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./paymentForm";
import { loadStripe } from "@stripe/stripe-js";

const stripeTestPromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
