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
    
      {Object.keys(product).map((item)=>{

     
      return <div key={product[item]._id}  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer">
       
          
       
        <Link passHref={true}  href={`/product/${product[item].slug}`} className="block relative  rounded  cursor-pointer">
          <img
            alt="ecommerce"
            className="h-[36vh] block justify-center"
            src={`${product[item].img}`}
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
           {product[item].category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product[item].title}
          </h2>
          <p className="mt-1">{product[item].price}</p>
        </div>
        <div className="mt-1">
          {product[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
          {product[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
          {product[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
          {product[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
        </div>
        <div className="mt-1">
          {product[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />}

          {product[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none" />}

          {product[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none" />}

          {product[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none" />}
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
  let tshirts = {}
  for (let item of product){
      if(item.title in tshirts){
          if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
              tshirts[item.title].color.push(item.color)

          }
          if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
              tshirts[item.title].size.push(item.size)
          }

      }else{
          tshirts[item.title] = JSON.parse(JSON.stringify(item))
          if(item.availableQty > 0){
              tshirts[item.title].color = [item.color]
              tshirts[item.title].size = [item.size]
          }
      }
  }
  return {
    props: {product: JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
  }
}

export default tshirt;