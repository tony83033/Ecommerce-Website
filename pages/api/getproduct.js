import Product from '../../models/product'
import ConnectDb from '../../middleware/mongoose'

const handler = async(req,res)=>{
    let product = await Product.find()
    res.status(200).json({product})
}

export default ConnectDb(handler);