
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
    console.log(req.body);
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
    const body = razorpay_order_id + '|' + razorpay_payment_id

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex")

    if(expectedSignature == razorpay_signature){
        res.redirect(`https://healthyme-sit-kewal25.firebaseapp.com/paymentsuccess?reference=${razorpay_order_id}`)
        //res.status(200).json({msg:true})
    }   
}

