
import {instance} from "../server.js"

export const checkOut = async (req, res) => {
    var options = {
        amount: Number(req.body.total_amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
      const order = await instance.orders.create(options);
      console.log(order);
    
    res.status(200).json({
        success:true,
        order
    });
}


export const paymentVerification = (req, res) => {
   res.status(200).send('YOUR ORDER HAS BEEN PLACED SUCCESSFULLY')
}

