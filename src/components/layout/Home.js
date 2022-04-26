import React from 'react'
import Slider from './Silder'
import Product from './Products'
import HotProduct from './HotProducts'
import Voucher from './Voucher'

const Home = () =>{
    return (
        <div>
            <Slider/>
            <Product/>
            <HotProduct/>
            <Voucher/>
        </div>
    )
}
export default Home