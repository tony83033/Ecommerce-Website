import Products from '../../models/product'
import ConnectDb from '../../middleware/mongoose'

const handler = async(req,res)=>{
    if(req.method=='POST'){
        let myproduct = await Products.findByIdAndUpdate(req.body._id,req.body);
        res.status(200).json({message:"Data updated successfully"})
    }else{
        res.status(400).json({message:"Bab request"});
    }
    

}

export default ConnectDb(handler);