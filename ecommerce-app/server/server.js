const express = require('express');
const stripe = require('stripe')('sk_test_51PoErFDrA7ZsFFhNC7e93PmMNZd01MkoHDM7EsN6SmnpVTz3m2zj3WNXCsNWGJ4ZjuUFXul8C9MQHZREdxxxIfbo00dDcehJ0A');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
