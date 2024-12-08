import React from 'react'
import Navbar from '@/app/Component/navbar'
import Hero from '@/app/Component/hero'
import Footer from '@/app/Component/Footer'
import Product from '@/app/Component/product.detail'
import Login from '@/app/Component/login'
import Join from '@/app/Component/join'
import Contactus from '@/app/Component/contact us'
import Cart from '@/app/Component/cart'
import Checklist from '@/app/Component/Checkout'

export default function page() {
  return (
    <div>
    <Navbar/> 
    <Hero/>
    <Footer/>
    <Product/>
    <Login/>
    <Join/>
    <Contactus/>
    <Cart/>
    <Checklist/>
    
  

    </div>
  )
}
