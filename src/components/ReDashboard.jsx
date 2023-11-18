import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReDashboard() {
  const navigate = useNavigate()
  
  const handleLogin = () => {
    if(localStorage.getItem("type") == "user"){
        navigate(`/dashboard/${localStorage.getItem("id")}`)
    }
    if(localStorage.getItem("type") == "admin"){
      navigate(`/admindashboard/${localStorage.getItem("id")}`)
  }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='flex flex-col'>
            <h1 className="text-5xl font-bold">You have already logged in!!</h1>
            <h1 className="py-6 text-lg font-bold">
              Click on the below button to redirect to Dashboard
            </h1>
            <div className="flex justify-center">
            <button className="btn btn-neutral" onClick={handleLogin}>Go to Dashboard</button>
            </div>
          </div>
        </div>
      </div>
  )
}
