import React,{useContext,useEffect,useState} from 'react'
import { logincontext } from '../contexts/Logincontext'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'

export default function Cart() {

  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount,productCards,displayCards,getProductCards,getAllProductDetails,cartProducts]= useContext(logincontext)


  const [cartData, setcartData] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    console.log(item)
    navigate(`/payment/${id}/${item.name}`)
  };


  useEffect(() => {
    // Define the backend API URL
    const apiUrl = 'http://localhost:4000/api/cart/getcartitems';

    // Make a GET request to the backend API
    axios.post(apiUrl,{'id':id})
      .then(response => {
        // Assuming the API response has a data property containing the array of cards
        const cardsFromBackend = response.data;
        // Update the state with the received card data
        setcartData(cardsFromBackend);
      })
      .catch(error => {
        // Handle errors, e.g., log the error or show an error message
        console.error('Error fetching card details:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
        <Navbar/>
        <br />
        <div className='text-4xl flex justify-center font-semibold'>
          Here is your cart!!
        </div>
        <br />
        <div className='flex'>        
          {cartData.map((item, index) => (
            <div key={index} className="card w-80 bg-slate-300 shadow-xl mx-4 my-4">
            <figure>
              <img src={item.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{item.name}</h2>
              <h2 className="card-title font-bold">Rs. {item.cost}</h2>
              <div className="flex">
                <div className="font-semibold">Type: </div>
                <h2 className="c">{item.type}</h2>
              </div>
              <p>{item.description}</p>
              <div className="card-actions justify-between">
                <button
                  className="btn bg-slate-800 text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-300"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

  )
}
