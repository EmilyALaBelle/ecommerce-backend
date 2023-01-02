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

export async function createManyProducts(req, res){
  const products = req.body
  try {
    await productList.insertMany(products)
    await getAllProducts(req, res)
  } catch (err) {
    console.error(err)
    res.status(500).json({error: err})
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

export async function findOneAndUpdate(req, res) {
  const {productId} = req.params
  try {
    await productList.findOneAndUpdate({_id: new ObjectId(productId)}, {$set: req.body})
    res.status(200).json(findOneAndUpdate)
  } catch (err) {
    console.error(err)
    res.status(500).json({error: err})
  }
}

export async function findDiscountedProducts(req, res) {
  const filter = {"discountPercentage": {$gt:10}}
  try {
    const someProduct = await productList.find(filter).toArray()
    res.status(200).json(someProduct)
  } catch (err) {
    console.error(err)
    res.status(500).json({error:err})
  }
}

export async function findFragrances(req, res) {
  const filter = {"category" : "fragrances"}
  try {
    const someFragrance = await productList.find(filter).toArray()
    res.status(200).json(someFragrance)
  } catch (err) {
    console.error(err)
    res.status(500).json({error:err})
  }
}

export async function findLaptops(req, res) {
  const filter = {"category": "laptops"}
  try{
  const someLaptop = await productList.find(filter).toArray()
  res.status(200).json(someLaptop)
  } catch (err) {
    console.error(err)
    res.status(500).json({error:err})
  }
}

export async function findSkincare(req, res){
  const filter = {"category": "skincare"}
  try{
    const someSkincare = await productList.find(filter).toArray()
    res.status(200).json(someSkincare)
  } catch (err) {
    console.error(err)
    res.status(500).json({error:err})
  }
}

export async function findSmartphones(req, res){
  const filter = {"category": "smartphones"}
  try{
    const someSmartphone = await productList.find(filter).toArray()
    res.status(200).json(someSmartphone)
  } catch (err) {
    console.error(err)
    res.status(500).json({error:err})
  }
}

