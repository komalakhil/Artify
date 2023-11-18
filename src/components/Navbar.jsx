import React,{useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import profile from '../images/Profile Image.jpg'
import logo from '../images/Logo - White Main.jpg'
import { logincontext } from '../contexts/Logincontext';

export default function Navbar() {

    const id  = localStorage.getItem('id')

    const location = useLocation();
    let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount]= useContext(logincontext)


    // Check if the current route is '/'
    const isLoginRoute = location.pathname === '/';
    const isSignupRoute = location.pathname.includes('signup')
    const isProfile = location.pathname.includes('profile')
    const isDashboard = location.pathname.includes('dashboard')
        // Initialize the navigate function
    const navigate = useNavigate();

    const handleDashboard = () => {
      // Use the navigate function to go to the "about" route
      if(!isDashboard){
        navigate(`/dashboard/${id}`);
      }
  };

    const handleCart = () => {
        // Use the navigate function to go to the "about" route
        navigate(`/cart/${id}`);
    };

    const handleProfile = () => {
        // Use the navigate function to go to the "about" route
        if(!isProfile){
          navigate(`/profile/${id}`);
        }
    };

    const handleWishlist = () => {
        // Use the navigate function to go to the "about" route
        navigate('/wishlist');
    };

    const handleLogout = () => {
      // Use the navigate function to go to the "about" route
      Logoutuser()
  };
  const handleOrders = () => {
    // Use the navigate function to go to the "about" route
    navigate(`/orders/${id}`)
};


  return (
    <div>
    {!UserloginStatus ? (
        <div className="navbar bg-slate-300">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-4xl">Artify</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <details>
                <summary className='text-xl w-52'>
                    About Company
                </summary>
                <ul className="p-2 bg-slate-300 w-52">
                    <li className='text-lg'><a className='hover:bg-base-100'>Customer</a></li>
                    <li className='text-lg'><a className='hover:bg-base-100'>Consumer</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div> 
      ) : (
      <div className="navbar bg-slate-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52 text-4xl">
        <li className='text-lg '><a className='hover:bg-base-100'>About Artify</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    {/* <a className="btn btn-ghost normal-case text-4xl" onClick={handleDashboard}>Artify</a> */}
    <img src={logo} alt="" className='h-16 w-32 hover:scale-110'onClick={handleDashboard}/>
  </div>
  <div className='navbar-end'>
  <div className="flex gap-2">

  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg> */}

    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cartCount}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-300 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartCount} Items</span>
          {/* <span className="text-info">Subtotal: $999</span> */}
          <div className="card-actions">
            <button className="btn btn-neutral btn-block" onClick={handleCart}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-300 rounded-box w-52">
        <li>
          <a className="justify-between hover:bg-base-100" onClick={handleProfile}>
            Profile
            <span className="badge bg-slate-300">New</span>
          </a>
        </li>
        <li><a onClick={handleWishlist} className='hover:bg-base-100'>My Wishlist</a></li>
        <li><a className='hover:bg-base-100' onClick={handleOrders}>My Orders</a></li>
        <li><a className='hover:bg-base-100' onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
    
</div>
      )}
    </div>
  )
}
