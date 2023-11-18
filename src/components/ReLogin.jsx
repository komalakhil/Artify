import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReLogin() {
  const navigate = useNavigate()
  
  const handleLogin = () => {
    navigate('/')
  }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='flex flex-col'>
            <h1 className="text-5xl font-bold">You have to login!!</h1>
            <h1 className="py-6 text-lg font-bold">
              Click on the login button below to login successfully
            </h1>
            <div className="flex justify-center">
            <button className="btn btn-neutral" onClick={handleLogin}>Log in </button>
            </div>
          </div>
        </div>
      </div>
  )
}
