import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './src/routes/index.js';

env.config();


const app = express();

app.use(express.json())
app.use(bodyParser.json());

app.use(cors());

let PORT = process.env.PORT || 5000;

app.use('/api', Router);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use((err,req,res,next)=>{
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})