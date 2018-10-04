var express = require('express');

var router = express.Router();
//stripe start
var stripe = require('stripe')('sk_test_iii1IKPAuuMlXZreV61trPro');



//stripe end

router.post('/payment',(req,res)=>{

// Create a new customer and then a new charge for that customer:
stripe.customers.create({
    email: 'adwaitamohanty08@gmail.com'
  }).then(function(customer){
    return stripe.customers.createSource(customer.id, {
      source: 'tok_visa'
    });
  }).then(function(source) {
    return stripe.charges.create({
      amount: 5000,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
      res.json({
		  
          success : charge
      })
    // New charge created on a new customer
  }).catch(function(err) {
      res.json({error : err})
    // Deal with an error
  });




})


module.exports = router;