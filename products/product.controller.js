const ProductModel = require('./product.model')



async function getProducts(req,res){
    try{
        const products = await ProductModel.find({})
        return res.status(200).send(products)
    }catch(err){
        res.status(400).send(err)
    }
}

async function addProduct(req,res){
    try{
        const newProd=new ProductModel({
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            category: req.body.category,
            brand: req.body.brand,
            title: req.body.title,
        })
        newProd.save((err, newProd)=>{
            if(err){
                console.log(err);
                return res.status(400).json({
                    errors: err.message
                })
            }
            return res.json({
                message: "Product added",
                newProd
            })
        })
    }catch(err){
        res.status(400).send(err)
    }
}

async function updateProduct(req, res){
    try{
        let prodId=req.params.id

        let result = await ProductModel.findByIdAndUpdate(prodId, req.body)
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function deleteProduct(req,res){
    try{
        let prodId = req.params.id
        let result = await ProductModel.findByIdAndDelete(prodId)

        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}


module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}