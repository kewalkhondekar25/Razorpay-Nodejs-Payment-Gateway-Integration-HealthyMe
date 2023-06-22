import express, { urlencoded } from 'express';
import {config} from "dotenv";
import router from './routes/routes.js';
import cors from 'cors';


config({path:'.env'})


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true }));

app.use('/api', router);
app.use('/api/getkey', (req, res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
})