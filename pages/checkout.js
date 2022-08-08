import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import {cart,addToCart , clearCart, removeFromCart,subTotal} from 'next/app'
import {AiOutlineShoppingCart , AiFillCloseCircle ,AiFillMinusCircle ,AiFillPlusCircle} from 'react-icons/ai'

const checkout = ({cart, addToCart , clearCart, removeFromCart,subTota}) => {
  return (
    <>
      <div className="container px-2 sm:m-auto min-h-screen pb-8">
  <div className="Toastify" />
  <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
  <h2 className="font-semibold text-xl">1. Delivery Details</h2>
  <div className="mx-auto flex my-2">
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          minLength={2}
          maxLength={40}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue=""
        />
      </div>
    </div>
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue="tonystark83033@gmail.com"
          readOnly=""
        />
      </div>
    </div>
  </div>
  <div className="px-2 w-full">
    <div className="mb-4">
      <label htmlFor="address" className="leading-7 text-sm text-gray-600">
        Address
      </label>
      <textarea
        minLength={2}
        maxLength={400}
        name="address"
        id="address"
        cols={30}
        rows={2}
        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        defaultValue={""}
      />
    </div>
  </div>
  <div className="mx-auto flex my-2">
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
          Phone Number
        </label>
        <input
          minLength={10}
          maxLength={10}
          placeholder="Your 10 Digit Phone Number"
          type="phone"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue=""
        />
      </div>
    </div>
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
          PinCode (Shipping only to India)
        </label>
        <input
          minLength={6}
          maxLength={6}
          type="text"
          id="pincode"
          name="pincode"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue=""
        />
      </div>
    </div>
  </div>
  <div className="mx-auto flex my-2">
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue=""
        />
      </div>
    </div>
    <div className="px-2 w-1/2">
      <div className="mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">
          District
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          defaultValue=""
        />
      </div>
    </div>
  </div>
  <h2 className="font-semibold text-xl">2. Review Cart Items &amp; Pay</h2>
 
  {/* ======================================================================== */}
  
            
            
          

            <div className="mycart    bg-pink-100 p-10 ">
               
                <ol>
               { Object.keys(cart).length==0 && <div className="my-5 font-semibold">Your Cart is Empty!</div> }

               {Object.keys(cart).map((k)=>{ return <li key={k}>
                        
                        <div className='item flex my-5'>
                            <div className=" font-semibold" />
                           {cart[k].name}/{cart[k].size}/{cart[k].color}

                       

                        <div className="flex font-semibold items-center justify-center ml-2  text-lg"> 
                        <span></span>
                        <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].name,cart[k].size,cart[k].variant,cart[k].price)}} className=' cursor-pointer text-pink-500'/>
                        <span className='mx-2 text-sm'>{cart[k].qty}</span>

                        <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].name,cart[k].size,cart[k].variant,cart[k].price)}} className='cursor-pointer text-pink-500'/>
                        </div>
                        </div>
                    </li>})}
                </ol>
                <span class="font-bold">Subtotal: ₹{subTota}</span>
                <div className="flex ">
                    <button onClick={clearCart} className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Clear Cart</button>

                    <Link href="/checkout"><button className='flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Check Out</button>
                    </Link>
                   
                    
                </div>
            </div>

 
  {/* ======================================================================== */}
    
 
  
  <div className="mx-4">
    <div className="form-check flex items-center">
      <input
        className="mr-2 p-8 md:h-4 md:w-4"
        type="checkbox"
        id="flexCheckDefault"
        defaultValue="false"
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor="flexCheckDefault"
      >
        <p className="py-4">
          I want to place a Cash on Delivery (COD) Order. I promise to pay the
          delivery partner on delivery
        </p>
      </label>
    </div>
  </div>
  <div className="mx-4">
    <div className="recaptcha my-2 hidden">
      <div>
        <div>
          <div style={{ width: 304, height: 78 }}>
            <div>
              <iframe
                title="reCAPTCHA"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le_7GQfAAAAAO5XGhMj07Ynhu0RceUF8J3a6ab5&co=aHR0cHM6Ly93d3cuY29kZXN3ZWFyLmNvbTo0NDM.&hl=en&type=image&v=4rwLQsl5N_ccppoTAwwwMrEN&theme=light&size=normal&badge=bottomright&cb=vwo8s4csg5b0"
                width={304}
                height={78}
                role="presentation"
                name="a-evfnrkwjflbd"
                frameBorder={0}
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              />
            </div>
            <textarea
              id="g-recaptcha-response"
              name="g-recaptcha-response"
              className="g-recaptcha-response"
              style={{
                width: 250,
                height: 40,
                border: "1px solid rgb(193, 193, 193)",
                margin: "10px 25px",
                padding: 0,
                resize: "none",
                display: "none"
              }}
              defaultValue={""}
            />
          </div>
          <iframe style={{ display: "none" }} />
        </div>
      </div>
    </div>
    <button
      disabled=""
      className="flex items-center justify-center mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm disabled:bg-pink-300 "
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 16 16"
        className="m-1"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
        />
      </svg>
      Pay ₹3592
    </button>
  </div>
</div>

    </>
  )
}

export default checkout;