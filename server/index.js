import express from "express";

const app = express();
const port = 6060;

const publishableKey =
  "pk_test_51KUQxGSDXeEuKRZCque8f2BHDPlwt65pHfEbjN8QksMIhvbhB6wcqkGjAfYDfhFj6TlvevplqBJyju1DNuqHNWhD00yUKKexEX";
const securityKey =
  "sk_test_51KUQxGSDXeEuKRZChmfm3JOt67Cm89lQAwCurdngIUiWD3dtyIotMIR3cc8vUjjbf1dSgw9lmpr4hVNPWZy00hi951zMX";

import Stripe from "stripe";
const stripe = Stripe(securityKey, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Donation app listining at http://172.20.10.3:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"] //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
