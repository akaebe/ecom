import express from 'express'
import { connectDB } from './config/db.js'
import Product from './Model/product.modal.js'
import router from './router/product.route.js'

import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const PORT = process.env.PORT || 5554
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send("default route")
    
})
app.use('/api/products',router)
app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at http://localhost:${PORT}`)})