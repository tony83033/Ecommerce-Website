import React from 'react'
import Link from 'next/link'
import Products from '../models/product'
import ConnectDb from '../middleware/mongoose'
import mongoose from "mongoose"

const tshirt = ({product}) => {
  console.log("This is my product",product)
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-0 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    
      {product.map((item)=>{

     
      return <div key={item._id}  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer">
       
          
       
        <Link passHref={true}  href={`/product/${item.slug}`} className="block relative  rounded  cursor-pointer">
          <img
            alt="ecommerce"
            className="h-[36vh] block justify-center"
            src={`${item.img}`}
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
           {item.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {item.title}
          </h2>
          <p className="mt-1">{item.price}</p>
        </div>
      </div>
   })}
      
    </div>
  </div>
</section>

    </>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URL)
}
  let product = await Products.find({category:"tshirt"})
  return {
    props: {product: JSON.parse(JSON.stringify(product))}, // will be passed to the page component as props
  }
}

export default tshirt;