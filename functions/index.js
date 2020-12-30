const functions = require('firebase-functions');
const express = require("express"); 
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I3sdBGZoEKe97YshZxUegeO8noUv2m4KtnFB59XApop5umZujvRAYA77DrVpPyEPgFQWoHvtpNCChpsLd1tycfK00MF9g06fO')



// -API


// -App config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved! For this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the currency
        currency: "usd",
    });

    // Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// -Listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/game-web-1c62d/us-central1/api




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
