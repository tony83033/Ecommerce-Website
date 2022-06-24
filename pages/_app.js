import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {
  return <>  <Navbar></Navbar><Component {...pageProps} /> <Footer></Footer></>
}

export default MyApp
