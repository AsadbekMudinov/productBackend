const express=require('express')
const router=express.Router()

// const userRouter=require('./users/user.router')
const productRouter=require('./products/product.router')

// router.use('/', userRouter)
router.use('/', productRouter)

module.exports=router