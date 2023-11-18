import React,{useContext} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import profile from '../images/Profile Image.jpg'
import logo from '../images/Logo - White Main.jpg'
import { logincontext } from '../contexts/Logincontext';

export default function AdminNavbar() {
    const location = useLocation();

    // Check if the current route is '/'
    const isLoginRoute = location.pathname === '/';
    const isSignupRoute = location.pathname === '/signup';
    let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror]= useContext(logincontext)


        // Initialize the navigate function
    const navigate = useNavigate();


  return (
    <div>
        <div className="navbar bg-slate-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 drop-shadow-md bg-slate-300 rounded-box w-52 text-4xl">
        <li className='text-lg'><a className='hover:bg-base-100'>Homepage</a></li>
        <li className='text-lg'><a className='hover:bg-base-100'>About Company</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
      <img src={logo} alt="" className='h-16 w-32 hover:scale-110'/>
  </div>
  {/* <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div> */}
  <div className='navbar-end'>
  <div className="flex gap-2">

  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg> */}

    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 drop-shadow-md bg-slate-300 menu menu-sm dropdown-content rounded-box w-52">
        <li onClick={Logoutuser}><a className='hover:bg-base-100'>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
    </div>
    </div>
  )
}
