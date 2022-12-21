import functions from 'firebase-functions'
import express from "express";
import cors from "cors"
import { getAllProducts, newProduct } from "./src/products.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/products', getAllProducts)
app.post('/product', newProduct)

export const api = functions.https.onRequest(app)