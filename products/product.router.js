const express = require('express')
const router = express.Router()
const controller = require('./product.controller')


router.route('/').get(controller.getProducts)
router.route('/').post(controller.addProduct)
router.route('/:id').put(controller.updateProduct)
router.route('/:id').delete(controller.deleteProduct)



module.exports = router;
