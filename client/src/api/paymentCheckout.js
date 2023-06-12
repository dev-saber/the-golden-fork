import axios from "axios";

export const paymentCheckout = (customerInfo, orderInfo) => {
  axios
    .post(
      "http://localhost:3001/checkout",
      JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 3,
            price: 28,
            name: "Golden Fried Calamari with Spicy Aioli",
          },
        ],
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    )
    .then((response) => {
      if (response.data && response.data.url) {
        window.location = response.data.url;
      } else {
        console.log("Invalid response format");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
