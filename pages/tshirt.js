import React from 'react'
import Link from 'next/link'

const tshirt = ({product}) => {
  console.log("This is my product",product)
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-0 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    

       <div  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer">
       
          
       
        <Link  href="/product/ecommerce" className="block relative  rounded  cursor-pointer">
          <img
            alt="ecommerce"
            className="h-[36vh] block justify-center"
            src="https://rukminim1.flixcart.com/image/800/960/kfoapow0-0/t-shirt/2/9/q/m-reg-whs-taken-white-young-trendz-original-imafw2jfwamqyu9e.jpeg?q=50"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
           Tshirt
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">₹499</p>
        </div>
      </div>

      
    </div>
  </div>
</section>

    </>
  )
}

export async function getServerSideProps(context) {
  let product = await fetch('http://localhost:3000/api/getproduct')
  console.log("This is my product",product)
  return {
    props: {product: JSON.parse(JSON.stringify(product))}, // will be passed to the page component as props
  }
}

export default tshirt;