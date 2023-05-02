// sk_test_51N3Hz6L17s9Puiw9ymIKw1Uqqskz6kuJ4kTnw4T2edl3CWaFxKHzHrk0SCgufF9LAEEgh1OdK3DHZco9I8u7Hao9002dO0logB
// high five: price_1N3I32L17s9Puiw9ol4W1CaN
// wave: price_1N3I4AL17s9Puiw9oF9f1KsB
// fist bump: price_1N3I4rL17s9Puiw9aoA06SpK

const express = require('express');
let cors = require('cors');
const stripe = require('stripe')('sk_test_51N3Hz6L17s9Puiw9ymIKw1Uqqskz6kuJ4kTnw4T2edl3CWaFxKHzHrk0SCgufF9LAEEgh1OdK3DHZco9I8u7Hao9002dO0logB');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    
    let lineItems = [];

    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});


app.listen(4000, () => console.log("port 4000"));