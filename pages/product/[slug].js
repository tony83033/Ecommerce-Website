import { useRouter } from 'next/router'
import { useState } from 'react'
import Products from '../../models/product'
import ConnectDb from '../../middleware/mongoose'
import mongoose from "mongoose"

const Post = ({addToCart,product,variants}) => {
  console.log("my product is ",product,variants)
  const router = useRouter()
  const { slug} = router.query
    const [status, setstatus] = useState()
    const [pin, setpin] = useState()
    const [mysize, setmysize] = useState(product.size);
    const [mycolor, setmycolor] = useState(product.color)
    const [mytitle, setmytitle] = useState(product.title)
    const [myprice, setprice] = useState(product.price)
    console.log("my size is = ",mysize)
   
   const refreshVariants = (newcolor,newsize)=>{
        let newurl =  `http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
        window.location = newurl;
   } 
  const onchange = (e)=>{
    setpin(e.target.value)
  }  

  const checkpin = async()=>{
    let allpins = await fetch('http://localhost:3000/api/pincode')
    let  pinjson = await allpins.json()

    if(pinjson.includes(parseInt(pin))){
      setstatus(true)
      console.log(status,pin)
    } else{
      setstatus(false)
      console.log(status,pin)
    }
  
  }
  return <>
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-top rounded"
        src="https://rukminim1.flixcart.com/image/800/960/kfoapow0-0/t-shirt/2/9/q/m-reg-whs-taken-white-young-trendz-original-imafw2jfwamqyu9e.jpeg?q=50"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {product.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {product.title}/{mysize}/{mycolor}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
          {product.desc}
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(mysize) && <button onClick={()=>refreshVariants('red',mysize)} className={`border-2  ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${mycolor == 'red'? 'border=black':'border=gray-300'}`} />}

            {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(mysize) && <button onClick={()=>refreshVariants('blue',mysize)} className={`border-2  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${mycolor == 'blue'? 'border=black':'border=gray-300'}`} />}

            {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(mysize) && <button onClick={()=>refreshVariants('yellow',mysize)} className={`border-2  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${mycolor == 'yellow'? 'border=black':'border=gray-300'}`} />}

            {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(mysize) && <button onClick={()=>refreshVariants('green',mysize)} className={`border-2  ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${mycolor == 'green'? 'border-black':'border-gray-300'}`} />}

            
           
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value={mysize} onChange={(e)=>refreshVariants(mycolor,e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
               {Object.keys(variants[mycolor]).includes('S') && <option value={'S'}>S</option>}
               {Object.keys(variants[mycolor]).includes('L') && <option value={'L'}>L</option>}
               {Object.keys(variants[mycolor]).includes('M') && <option value={'M'}>M</option>}
               {Object.keys(variants[mycolor]).includes('XL') && <option value={'XL'}>XL</option>} 
                 
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
          ₹{product.price}
          </span>
          <button onClick={()=>{addToCart(slug,1,product.title,product.size,product.color,product.price)}} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
            Add to cart
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
        <div className="pincode flex text-sm mt-5">
          <input className='px-2 border-2 text-sm border-gray-700 rounded-md' placeholder='Enter your pincode' onChange={onchange} type="text" />
          <button className='flex ml-3 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded' onClick={checkpin}>Check</button>
        </div>
       { !status && status!=null &&<div className="message text-red-500 text-sm mt-3">
          Sorry! we do not deliver to this pincode
        </div>}
        { status && status!=null &&<div className="message text-green-500 text-sm mt-3">
          <datagrid>Yay! we deliver to this pincode</datagrid>
        </div>}
      </div>
    </div>
  </div>
</section>

  </>
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URL) 
}
  let product = await Products.findOne({slug: context.query.slug})
  let variants = await Products.find({title: product.title})
  let colorSizeSlug = {}

  for (let item of variants){
      if(Object.keys(colorSizeSlug).includes(item.color)){
        colorSizeSlug[item.color][item.size] = {slug:item.slug}
      }else{
        colorSizeSlug[item.color] = {}
        colorSizeSlug[item.color][item.size] = {slug:item.slug}
      }
  }

  return {
    props: {product: JSON.parse(JSON.stringify(product)),variants: JSON.parse(JSON.stringify(colorSizeSlug))}, // will be passed to the page component as props
  }
}

export default Post