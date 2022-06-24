import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineShoppingCart , AiFillCloseCircle} from 'react-icons/ai'
const navbar = () => {
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
        <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-3 shadow-xl">
            <div className="logo mx-5">
               <Link href="/"> 
               <Image src="/logo.png" className='cursor-pointer' width={200} height={40}/>
               
                </Link>''
            </div>
            <div className="nav">
                <ul className='flex justify-center items-center space-x-3 font-bold'>
                    <Link href="/tshirt"><a><li>tShirt</li> </a></Link>
                    <Link href="/hoodies"><a><li>Hoodies</li> </a></Link>
                    <Link href="/mugs"><a><li>Mugs</li> </a></Link>
                    <Link href="/stickers"><a><li>stickers</li></a></Link>
                </ul>
            </div>

            <div className="cart absolute right-3 top-4 mx-5 cursor-pointer" onClick={togglecart}>
            <AiOutlineShoppingCart className='text-3xl'/>
            </div>

            <div ref={ref} className="mycart absolute right-0 top-0 bg-pink-100 p-10 transform transition-transform translate-x-full ">
                <h2 className='text-center mt-5'>Shoping Cart</h2>
                <span className='absolute right-2 top-2 text-2xl cursor-pointer' onClick={togglecart}><AiFillCloseCircle/></span>
                <ol>
                    <li>
                        <span>Tshirt . wear the code</span>
                    </li>
                </ol>
            </div>

        </div>
    </>
  )
}

export default navbar