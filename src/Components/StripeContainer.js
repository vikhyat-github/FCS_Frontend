import React from "react";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import PaymentForm  from "../Components/PaymentForm";


const stripeTP=loadStripe(process.env.REACT_APP_STRIPE)

export default function StripeContainer(){

    return (

        <Elements stripe={stripeTP}>
            <PaymentForm/>
        </Elements>
    )
}
