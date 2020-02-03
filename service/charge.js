const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports = (req) => {

    const token = req.body.stripeToken;

    // const calculateTotal = foodItems => {
      
    // };
    // const orderAmount = calculateTotal(foodItems);

    return stripe.charges.create({
      amount: parseInt(process.env.STRIPE_COST, 10),
      currency: process.env.STRIPE_CCY,
      source: token,
      metadata: {},
    });
  }