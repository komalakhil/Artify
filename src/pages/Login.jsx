import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { logincontext } from '../contexts/Logincontext'
import ReDashboard from '../components/ReDashboard'


export default function Login() {  
    // Initialize the navigate function
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount]= useContext(logincontext)


  function validateFormData() {
    if(formData.email !=''){
      if(formData.password!=''){
        return true;
      }
      else{
        alert('Enter valid Password')
        return false;
      }
    }
    else{
      alert('Enter valid Email-id')
      return false;
    }
  }

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make an API call to authenticate the user
      if(validateFormData()){
          Loginuser(formData);
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };



    if(!UserloginStatus){
      return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl border border-gray-300">
          <div className="card-body">
            <h2 className="card-title flex justify-center">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <br />
              <h1>Signup as Customer? <a className='underline' onClick={() => navigate("/signup")}>Click here</a></h1>
              <br />
              <h1>Signup as Admin? <a className='underline' onClick={() => navigate("/adminsignup")}>Click here</a></h1>
              <div className="card-actions mt-6">
                <button className="btn btn-neutral w-full" >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }
  else{
    return(
    <ReDashboard/>
    );
  }
}


