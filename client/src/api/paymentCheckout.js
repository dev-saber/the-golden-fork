import axios from "axios";

export const paymentCheckout = (orderInfo) => {
  axios
    .post(
      "http://localhost:3001/checkout",
      JSON.stringify({
        items: orderInfo.mealsInfo,
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
