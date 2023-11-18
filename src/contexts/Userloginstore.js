import { logincontext } from "./Logincontext";
import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Userloginstore({children}){  

    const [currentuser,setcurrentuser]=useState({})
    const [loginerror,setloginerror]=useState("")
    const [UserloginStatus,setUserloginStatus]=useState(false)
    const [cartCount,setCartCount]=useState(0)
    const [productCards,setProductCards]=useState({})
    const [displayCards,setDisplayCards]=useState([])
    const [cartProducts,setCartProducts]=useState({})

    const navigate = useNavigate();

    const increaseCount = (count,item)=>{
      console.log('Item',item);
      setCartCount(count)
    }

    // const handleCartedCards = (item,id) => {
    //   console.log(item)
    //   console.log(id)
    //   if (cartProducts){
    //   if (id in cartProducts.id) {
    //     // Append 3 to the list of 'a'
    //     cartProducts.id.push(item);
    //   } else {
    //     // Create a new list with 3 as the value for 'a'
    //     cartProducts.id = [item];
    //   }
    // }
    // }

    const getAllProductDetails = () => {
      console.log("Getting")
          // Make an Axios GET request to fetch data from the backend
        axios.get('http://localhost:4000/api/newproduct/getproducts')
        .then(response => {
          // Assuming your backend returns an array of label values in response.data
          console.log('Response',response.data);
          setProductCards(response.data)
      })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    const getProductCards = (types) => {
      if(types.length == 0){
        console.log('Product Cards',productCards);
        setDisplayCards(productCards);
        return
      }
      console.log('Types',types);
      // const filteredObjects = productCards.filter(obj => types.hasOwnProperty(obj.type));
      var filteredObjects = [];
      if (Array.isArray(productCards)) {
          filteredObjects = productCards.filter(obj => types.includes(obj.type));
      }else{
        console.log('No products found')
      }
      console.log('Store Filtered Objects',filteredObjects);
      setDisplayCards(filteredObjects);
      return filteredObjects
    }
    
    const Loginuser=(userobj)=>{
              console.log(userobj);
              //make http post request to server new user to local api
              axios
              .post('http://localhost:4000/api/users/login',userobj)
           .then(response=>{
            //  console.log(response.message)
             if(response.status == 200)
             {
                 setcurrentuser(response.data.user.username)
                 setUserloginStatus(true)
                 setloginerror("")
                 localStorage.setItem("token",response.data.token)
                 localStorage.setItem("type",response.data.type)
                 const id = response.data.user._id;    
                 localStorage.setItem("id",id)
                 if(response.data.type == 'admin'){
                  navigate(`/admindashboard/${id}`);
                 }
                 else{
                  navigate(`/dashboard/${id}`);
                 }
             }
           })
           .catch(err=>{
            if(err.response){
                if(err.response.status == 404){
                    alert('Enter correct mail id')
                }
                else if(err.response.status == 401){
                    alert('Enter correct password')
                }
                else{
                  alert('Login Error')
                  setloginerror(err.response.data.message)
                }
              }
              else{
                alert('Unexpected Error')
              }
           })
    }

    const Signupuser=(userobj)=>{
        console.log(userobj);
        //make http post request to server new user to local api
        axios
        .post('http://localhost:4000/api/customer/signup',userobj)
     .then(response=>{
      //  console.log(response.message)
       if(response.status == 200)
       {
           setcurrentuser(response.data.user.username)
           setUserloginStatus(true)
           setloginerror("")
           localStorage.setItem("token",response.data.token)
           const id = response.data.user._id;    
           localStorage.setItem("id",id)
           localStorage.setItem("type",response.data.type)
           navigate(`/dashboard/${id}`);
       }
     })
     .catch(err=>{
      if(err.response){
          if(err.response.status == 400){
              alert('You already have an user account, Create account with another mail id')
          }
          else if(err.response.status == 402){
            alert('You already have an admin account, Create account with another mail id')
          }
          else{
            alert('Login Error')
            setloginerror(err.response.data.message)
          }
        }
        else{
          alert('Unexpected Error')
        }
     })
}

const Signupadmin=(userobj)=>{
    console.log(userobj);
    //make http post request to server new user to local api
    axios
    .post('http://localhost:4000/api/admin/adminsignup',userobj)
 .then(response=>{
  //  console.log(response.message)
   if(response.status == 200)
   {
       setcurrentuser(response.data.admin.username)
       setUserloginStatus(true)
       setloginerror("")
       localStorage.setItem("token",response.data.token)
       const id = response.data.admin._id;    
       localStorage.setItem("id",id)
       localStorage.setItem("type",response.data.type)
       navigate(`/admindashboard/${id}`);
   }
 })
 .catch(err=>{
  if(err.response){
      if(err.response.status == 400){
          alert('You already have an user account, Create account with another mail id')
      }
      else if(err.response.status == 402){
        alert('You already have an admin account, Create account with another mail id')
      }
      else{
        alert('Login Error')
        setloginerror(err.response.data.message)
      }
    }
    else{
      alert('Unexpected Error')
    }
 })
}
    const Logoutuser=()=>{
        localStorage.clear()
        setUserloginStatus(false)
        navigate('/')
        alert('You have succesfully logged out')
    }
    return (
        <logincontext.Provider value={[currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount,productCards,displayCards,getProductCards,getAllProductDetails,cartProducts]}>{children}</logincontext.Provider>
    )
}
export default Userloginstore