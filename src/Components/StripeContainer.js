import React from "react";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import PaymentForm  from "../Components/PaymentForm";

const PUBLIC_KEY ="pk_test_51JstOkSDisUUgHqFHnU6IkKcNSP8MQWonNBIhA51ZbIGc4ilNlxbbJCrKHsqhhMTIxPfVRY5CqLSwkt95SGrbTVc0092fl6wiW";

const stripeTP=loadStripe(PUBLIC_KEY)

export default function StripeContainer(){

    return (

        <Elements stripe={stripeTP}>
            <PaymentForm/>
        </Elements>
    )
}
