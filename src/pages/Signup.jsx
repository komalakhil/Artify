import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { logincontext } from '../contexts/Logincontext';
import ReDashboard from '../components/ReDashboard';



export default function Signup() {

  const [formData, setFormData] = useState({ username: '',email: '',phone:'', password: '',confirmpassword:'' });
  const [error, setError] = useState('');
  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount]= useContext(logincontext)



    // Initialize the navigate function
  const navigate = useNavigate();

  function validatePhoneNumber(phoneNumber) {
    // Define a regex pattern to match 10 digits
    const regexPattern = /^\d{10}$/;
  
    // Test if the phoneNumber matches the pattern
    return regexPattern.test(phoneNumber);
  }

  const handleLogin = () => {
    // Use the navigate function to go to the "about" route
    navigate('/');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if(!validatePhoneNumber(formData.phone)){
      setError('Enter valid phone number');
      alert(error)
      return
    }
    if(formData.password != formData.confirmpassword){
      setError('Confirm your password correctly');
      alert(error)
      return
    }
    try {
      const signupData = {
        username :  formData.username,
        email : formData.email,
        phone : formData.phone,
        password : formData.password
      }
      Signupuser(signupData);
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  if(!UserloginStatus){
  return (
    <div>
    <Navbar/>
    <div className='flex items-center justify-center min-h-screen'>
    <div className="card w-96 bg-base-100 shadow-xl border border-gray-300">
      <div className="card-body">
        <h2 className="card-title flex justify-center">Create a new account</h2>
        <form onSubmit={handleSignup}>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Username</span>
                </label>
                <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
            </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className='form-control mt-4'>
          <label className="label">
              <span className="label-text">Phone number</span>
            </label>
          <div className="flex items-center space-x-2">

            <select className="border p-2 rounded">
                <option value="IND">India (+91)</option>
                <option value="US">USA</option>
                {/* Add more country options here */}
            </select>
            <input
                type="text"
                placeholder="Enter phone number"
                className="input input-bordered"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            </div>
        </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-Enter your password"
              className="input input-bordered"
              onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })}
            />
          </div>
          <br />
          <h1>Already have an account? <a className='underline' onClick={handleLogin} >Click here</a></h1>
          <div className="card-actions mt-6">
            <button className="btn bg-slate-300 w-full">Create</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
  }
  else{
    return(
      <ReDashboard/>
    )
  }
}


