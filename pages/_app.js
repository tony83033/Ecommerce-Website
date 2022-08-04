import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {useState , useEffect} from 'react'
function MyApp({ Component, pageProps }) {

  
        const [cart, setcart] = useState({})
        const [mysubt, setmysubt] = useState(0)
        useEffect(() => {
          console.log("I am useEffect from _app.js")    
          try {
           if(localStorage.getItem('cart')){
             setcart(JSON.parse(localStorage.getItem('cart')))
           }
          } catch (error) {
           console.log(error)
           localStorage.clear('cart')
          }
          saveCart(cart)
         }, [])
        
        const saveCart = (myCart)=>{
          localStorage.setItem('cart',JSON.stringify(myCart))
          let subt = 0
          let keys = Object.keys(myCart)
          for(let i=0;i<keys.lengt;i++){
            subt+= myCart[keys[i]].price * myCart[keys[i]].qty;
          }
          setmysubt(subt)
        }

        const addToCart = (itemCode,qty,name,size,variant,price)=>{
          let newCart = cart
          
          
          if(itemCode in cart){
              
              newCart[itemCode].qty = cart[itemCode].qty + qty
              if(localStorage.getItem('cart')){
                setcart(JSON.parse(localStorage.getItem('cart')))
              }
          }else{
            newCart[itemCode] = {qty:1,name,size,variant,price}
            if(localStorage.getItem('cart')){
              setcart(JSON.parse(localStorage.getItem('cart')))
            }
          }
          setcart(newCart)
          saveCart(newCart)
          console.log('Add to cart run successfully');
          if(localStorage.getItem('cart')){
            setcart(JSON.parse(localStorage.getItem('cart')))
          }
          // console.log(newCart[itemCode].name.newCart[itemCode].qty,newCart[itemCode].price,newCart[itemCode].variant,"This is conlole.log")
        }

        const removeFromCart = (itemCode,qty,name,size,variant,price)=>{
            let newCart = cart
            if(itemCode in cart){
              newCart[itemCode].qty = cart[itemCode].qty -  qty
              if(localStorage.getItem('cart')){
                setcart(JSON.parse(localStorage.getItem('cart')))
              }
             }
            if(newCart[itemCode].qty <=0){
              delete newCart[itemCode]
              if(localStorage.getItem('cart')){
                setcart(JSON.parse(localStorage.getItem('cart')))
              }
            }

            setcart(newCart)
            saveCart(newCart)
            if(localStorage.getItem('cart')){
              setcart(JSON.parse(localStorage.getItem('cart')))
            }
            
        }

        const clearCart =()=>{
            setcart({})
            saveCart({})
            console.log("Cart hase been clear");
            if(localStorage.getItem('cart')){
              setcart(JSON.parse(localStorage.getItem('cart')))
            }
        }
 
  return <>  <Navbar cart={cart}  addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} lsubTota={mysubt} ></Navbar><Component cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart}  subTotal={mysubt} {...pageProps} /> <Footer></Footer></>
}

export default MyApp
