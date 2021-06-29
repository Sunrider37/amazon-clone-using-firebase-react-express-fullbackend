const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J7fSKKo2faR8dfaob0l5TMsSbyVieLcyQKrOT9ESK3RBZOaLdE6eNltCCXldCUiAjGyrCFUCaYmQzyUe1c9qgs400kH3jPQJh')

//Api

//App Config
const app = express();

// MiddleWares

app.use(cors({origin: true}));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment REquest received !!!  =>>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-57342/us-central1/api