const dotenv=require('dotenv').config();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();
const connect=require('./db');
const userRoutes=require('./routes');

connect();

app.use(express.json());  
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/health', (req, res) => res.send('Server is running......'));
app.use('/users',userRoutes);

app.listen(3000,()=>console.log('server started at 3000'));