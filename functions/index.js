import functions from 'firebase-functions'
import express from "express";
import cors from "cors"
import { getAllProducts, newProduct, getOneProduct, findOneAndUpdate, createManyProducts, findDiscountedProducts } from "./src/products.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/products', getAllProducts)
app.post('/newProduct', newProduct)
app.get('/product/:productId', getOneProduct)
app.patch('/product/:productId', findOneAndUpdate)
app.post('/newProducts', createManyProducts)
app.get('/discountedProducts', findDiscountedProducts)

export const api = functions.https.onRequest(app)