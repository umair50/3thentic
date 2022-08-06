import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./index.css";
import axios from "axios";
// import { useState } from "react/cjs/react.production.min";
//import { useToasts } from "react-toast-notifications";

const index = ({ name, events, wallet_address }) => {
  return (
    <PayPalButton
      shippingPreference="NO_SHIPPING"
      options={{
        clientId:
          "AXhkBZCUM8cYX2VZYIs4movn1jUE8tgEtUpL3VEQaPg42LkJbej6rvZiwHmtuprXqH5jYFr4ADBdo8vm",
        disableFunding: "credit",
        currency: "USD",
        intent: "capture",
        buyerCountry: "US",
      }}
      amount="5"
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={async (details, data) => {
        alert("Thank You" + details.payer.name.given_name);

        // // OPTIONAL: Call your server to save the transaction
        // return fetch("/paypal-transaction-complete", {
        //   method: "post",
        //   body: JSON.stringify({
        //     orderID: data.orderID,
        //   }),
        // });
        // implementation of the axios

        // const [value, setValue] = useState(false);
        const api = axios.create({
          baseURL: "https://railsapplications.herokuapp.com/users",
        });
        const user = {
          name: name,
          wallet_address: wallet_address,
          events: events,
        };
        const resp = await api.post("", user);
        if (resp.status === 200) {
          // setValue(true);
          // const { addToast } = useToasts();
          // addToast("Your Ticket is Send", {
          //   appearance: "success",
          //   autoDismiss: true,
          // });
        }
      }}
    />
  );
};

export default index;
