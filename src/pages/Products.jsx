import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import Cards from '../components/Cards'
                                   
export default function Products() {



  return (
    <div>
        <Navbar/>
        <br />
        <div className='flex'>
        <Filters/>
        <Cards/>
        </div>
    </div>
  )
}
