import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdAccountCircle} from 'react-icons/md'
import {AiOutlineShoppingCart , AiFillCloseCircle ,AiFillMinusCircle ,AiFillPlusCircle} from 'react-icons/ai'

const navbar = ({cart, addToCart , clearCart, removeFromCart,subTotal}) => {
    console.log(cart, addToCart , clearCart, removeFromCart,subTotal)
    const togglecart = ()=>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if(!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
  return (
    <>
        <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-3 shadow-xl sticky top-0 bg-white">
            <div className="logo mx-5">
               <Link href="/"> 
               <Image src="/logo.png" className='cursor-pointer' width={200} height={40}/>
               
                </Link>
            </div>
            <div className="nav">
                <ul className='flex justify-center items-center space-x-3 font-bold'>
                    <Link href="/tshirt"><a><li>tShirt</li> </a></Link>
                    <Link href="/hoodies"><a><li>Hoodies</li> </a></Link>
                    <Link href="/mugs"><a><li>Mugs</li> </a></Link>
                    <Link href="/stickers"><a><li>stickers</li></a></Link>
                </ul>
            </div>
            <Link href={'/login'}><a>
            <div className="cart absolute right-12 top-4 mx-5 cursor-pointer">
            <MdAccountCircle className='text-3xl'/>
            </div></a></Link>

            <div className="cart absolute right-3 top-4 mx-5 cursor-pointer" onClick={togglecart}>
            <AiOutlineShoppingCart className='text-3xl'/>
            </div>

            <div ref={ref} className="mycart  absolute h-[100vh] right-0 top-0 bg-pink-100 p-10 transform transition-transform translate-x-full ">
                <h2 className='text-center mt-5'>Shoping Cart</h2>
                <span className='absolute right-2 top-2 text-2xl cursor-pointer' onClick={togglecart}><AiFillCloseCircle/></span>
                <ol>
               { Object.keys(cart).length==0 && <div className="my-5 font-semibold">Your Cart is Empty!</div> }

               {Object.keys(cart).map((k)=>{ return <li key={k}>
                        
                        <div className='item flex my-5'>
                            <div className="w-2/3 font-semibold" />
                           {cart[k].name}

                       

                        <div className="flex font-semibold items-center justify-center w-1/3  text-lg"> 
                        <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].name,cart[k].size,cart[k].variant,cart[k].price)}} className=' cursor-pointer text-pink-500'/>
                        <span className='mx-2 text-sm'>{cart[k].qty}</span>

                        <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].name,cart[k].size,cart[k].variant,cart[k].price)}} className='cursor-pointer text-pink-500'/>
                        </div>
                        </div>
                    </li>})}
                </ol>

                <div className="flex ">
                    <button onClick={clearCart} className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Clear Cart</button>

                    <Link href="/checkout"><button className='flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Check Out</button>
                    </Link>
                   
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default navbar