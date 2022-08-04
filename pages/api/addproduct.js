import Porducts from '../../models/product'
import ConnectDb from '../../middleware/mongoose'



const handler = async (req,res)=>{
    if(req.method == 'POST'){
        
            
                let myproduct = new Porducts({
                    title: req.body.title,
                    slug: req.body.slug,
                    desc: req.body.desc,
                    img: req.body.img,
                    category: req.body.category,
                    size: req.body.size,
                    color: req.body.color,
                    price: req.body.price,
                    availableQty: req.body.availableQty,
                    
                });
                console.log(req.body);
                await myproduct.save()
            
            
                res.status(200).json({success:"Data save successfully"})
    }else{
         res.status(400).json({error: "Bad request"})
        
    }
}

export default ConnectDb(handler);