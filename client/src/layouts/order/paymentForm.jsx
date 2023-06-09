import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8000/api/order", {
          amount: 1000,
          id: id,
        });
        if (response.data.success) {
          console.log("success");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else console.log(error);
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#0F0A06",
                  "::placeholder": {
                    color: "#ED9100",
                  },
                },
                invalid: {
                  color: "#e53e3e",
                },
              },
            }}
            className="p-2 border border-gray-300 rounded"
          />
          <button>Confirm</button>
        </form>
      ) : (
        <div>Your payment has been fullfilled successfully</div>
      )}
    </>
  );
}

export default PaymentForm;
