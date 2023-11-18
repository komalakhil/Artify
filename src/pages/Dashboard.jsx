import React,{useContext,useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ArtsCarousel from '../components/ArtsCarousel'
import Footer from '../components/Footer'
import { logincontext } from '../contexts/Logincontext'
import ReLogin from '../components/ReLogin'
// Import the useParams hook
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataCarousel from '../components/DataCarousel'





export default function Dashboard() {
       
    // Access the data from the URL parameter

    const { id } = useParams();
    const navigate = useNavigate();
    const [labelValues, setLabelValues] = useState([]);
    const [totalItems,setTotalItems] = useState([])
    let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount,productCards,displayCards,getProductCards,getAllProductDetails]= useContext(logincontext)
    
    useEffect(() => {
      
      getAllProductDetails();
  
    }, []); // Empty dependency array to run the effect only once on component mount
  

    if (UserloginStatus) {
      return (
        <div>
          <Navbar id={id} />
          <br />
          <Carousel />
          {/* <br />
          <div className='flex justify-start'>
            <h1 className='text-2xl text-slate-800 ml-4'>Welcome {name} !!</h1>
          </div> 
          <br/> */}
          <DataCarousel/>
          <ArtsCarousel id ={id}/>
          <div className="border-t border-dashed border-gray-500"></div>
          <Footer />
        </div>
      );
    } else {
      return(
      <ReLogin/>
      )
    }
  }  
