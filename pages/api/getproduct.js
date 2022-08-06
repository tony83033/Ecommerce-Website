import Product from '../../models/product'
import ConnectDb from '../../middleware/mongoose'

const handler = async(req,res)=>{
    let product = await Product.find()
    let tshirts = {}
    for (let item in product){
        if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color && item.availableQty > 0)){
                tshirts[item.title].color.push(item.color)

            }
            if(!tshirts[item.title].size.includes(item.color)){
                tshirts[item.title].size.push(item.size)
            }

        }else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
                tshirts[item.title].color = [item.color]
                tshirts[item.size].size = [item.size]
            }
        }
    }
    res.status(200).json({tshirts})
}

export default ConnectDb(handler);