var braintree = require("braintree");
require("dotenv").config();

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

class brainTree {
  ganerateToken(req, res) {
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        return res.json(err);
      }
      return res.json(response);
    });
  }

  paymentProcess(req, res) {
    let { amountTotal, paymentMethod } = req.body;
    gateway.transaction.sale(
      {
        amount: amountTotal,
        paymentMethodNonce: paymentMethod,
        options: {
          submitForSettlement: true,
        },
      },
      (err, result) => {
        if (err) {
          console.error(err);
          return res.json(err);
        }
        if (result.success) {
          const generateOrderID = () => {
              const date = new Date();
              const year = date.getFullYear().toString().substr(-2);
              const month = ('0' + (date.getMonth() + 1)).slice(-2);
              const day = ('0' + date.getDate()).slice(-2);
              const randomNumber = Math.floor(1000 + Math.random() * 9000); // Chỉ lấy 4 chữ số ngẫu nhiên
              return "LQ" + year + month + day + randomNumber;
          };
      
          const orderID = generateOrderID();
          console.log("Order ID: " + orderID);
          result.transaction.id = orderID;
          return res.json(result);
      } else {
          console.error(result.message);
      }      
    }
    );
  }
}

const brainTreeController = new brainTree();
module.exports = brainTreeController;
