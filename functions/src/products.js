import mongoSecrets from "./mongoSecrets.js";
import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient(mongoSecrets)

const db = client.db("Products")
const productList = db.collection("productList")

export async function getAllProducts(req, res) {
  const filter = {}
  try {
    const allProducts = await productList.find(filter).toArray()
    res.status(200).json(allProducts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
}

export async function newProduct(req, res) {
  const product = req.body
  try {
    await productList.insertOne(product)
    await getAllProducts(req, res)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
}

export async function getOneProduct(req, res) {
  const {productId} = req.params
  try {
    const product = await productList.find({_id: new ObjectId(productId)},productId).toArray()
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({error: err})
  }
}