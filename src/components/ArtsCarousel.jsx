import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ArtsCarousel(props) {
    const navigate = useNavigate();

    const Products = () => {
        console.log("Clicked")
        navigate(`/products/${props.id}`)
    }
  return (
    <div className='bg-slate-300 flex flex-col'>
        <div className='text-4xl flex justify-center font-bold'>
            50% offer on latest products
        </div>
        <br />
        <div className='text-2xl flex justify-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, animi?
        </div>
        <br />
        <div className='flex justify-center'>
            <button className='btn bg-slate-800 text-white hover:bg-white hover:text-black' onClick={Products}>Click Here to Explore</button>
        </div>
        <br />
    </div>
  )
}
