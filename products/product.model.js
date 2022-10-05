const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    color: String,
    category: String,
    brand: String,
    title: String,
})

const ProductModel = mongoose.model('ProductModel', productSchema)

module.exports = ProductModel