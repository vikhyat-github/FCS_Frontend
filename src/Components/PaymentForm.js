import React, { useState } from "react";

import creditlogo from "../Assets/wallet/img3.jpg";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "../Styles/PaymentForm.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "greenyellow",
      color: "#black",
      fontWeight: 500,

      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "grey" },
    },
    invalid: {
      iconColor: "Red",
      color: "black",
    },
  },
};

export default function PaymentForm() {
  const [accepted, setAccepted] = useState(false);
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
        const response = await axios.post(
          `${process.env.REACT_APP_PAYMENT}`,
          {
            amount: 9999999,
            id: id,
          }
        );

        if (response.data.success) {
          console.log("Payment is SuccesFul");
          setAccepted(true);
        }
      } catch (error) {
        console.log("Unsuccesfull", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!accepted ? (
        <>
          <div className="logo">
            <img src={creditlogo} alt="payment form illustration" />
          </div>
          <div className="data">
            <form onSubmit={handleSubmit}>
              <fieldset className="FormGroup">
                <div className="FormRow">
                  <CardElement options={CARD_OPTIONS} />
                </div>
              </fieldset>
              <div className="button1">
                <button>
                  <h1>Pay</h1>
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div
          className="success"
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            placeItems: "center",
            alignItems: "centre",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2> Thanks for shopping with us </h2>

          <Link to="/">
            <Button className="button2">Continue Shopping</Button>
          </Link>
        </div>
      )}
    </>
  );
}
