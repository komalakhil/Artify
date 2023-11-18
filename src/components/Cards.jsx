import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { logincontext } from '../contexts/Logincontext';
import { useNavigate,useParams  } from 'react-router-dom';

export default function Cards() {
  const [likedCards, setLikedCards] = useState([]);
  const [cartedCards, setCartedCards] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [cartItemNames,setCartItemNames] = useState([]);
  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount,productCards,displayCards,getProductCards,getAllProductDetails,cartProducts]= useContext(logincontext);

  const {id} =useParams();
  const navigate = useNavigate();

  const handleLove = (index) => {
    setLikedCards((prevLikedCards) => {
      const newLikedCards = [...prevLikedCards];
      newLikedCards[index] = !newLikedCards[index];
      return newLikedCards;
    });
  };

  const handleCart = (index,item) => {
    console.log(index)
    console.log(item)
    setSelectedItem(item.name);
    if(cartedCards[index]==true){
      setCartedCards((prevCartedCards) => {
        const newCartedCards = [...prevCartedCards];
        newCartedCards[index] = !newCartedCards[index];
        const count = newCartedCards.filter((carted) => carted).length;
        increaseCount(count); // Assuming increaseCount is a function to update cartCount
        return newCartedCards;
      });
      document.getElementById('my_modal_1').showModal()
    }
    else{
      setCartedCards((prevCartedCards) => {
        const newCartedCards = [...prevCartedCards];
        newCartedCards[index] = !newCartedCards[index];
        const count = newCartedCards.filter((carted) => carted).length;
        increaseCount(count); // Assuming increaseCount is a function to update cartCount
        return newCartedCards;
      });
      document.getElementById('my_modal_2').showModal()
    }
  };

  const loveicon = (index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={likedCards[index] ? 'red' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-8 h-8 mt-3 hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer`}
      onClick={() => {
        handleLove(index)
        console.log(index)}}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );

  const carticon = (index,item) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={cartedCards[index] ? 'orange' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-8 h-8 mt-3 hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer`}
      onClick={() => {
        handleCart(index,item)
      }
      }
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />

    </svg>
  );

  useEffect(() => {
    // Define the backend API URL
    const apiUrl = 'http://localhost:4000/api/cart/getcartitems';

    // Make a GET request to the backend API
    axios.post(apiUrl,{'id':id})
      .then(response => {
        // Assuming the API response has a data property containing the array of cards
        const cardsFromBackend = response.data;
        
        // Extract names from each item and create a list
        const namesList = cardsFromBackend.map(item => item.name);

        console.log(namesList)
        // Set the state with the list of names
        setCartItemNames(namesList);

        // Initialize cartedCards based on whether each item is in cartItemNames
        const initialCartedCards = displayCards.map((item) => namesList.includes(item.name));
        setCartedCards(initialCartedCards);

      })
      .catch(error => {
        // Handle errors, e.g., log the error or show an error message
        console.error('Error fetching card details:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const handleBuyNow = (item) => {
    console.log(item)
    navigate(`/payment/${id}/${item.name}`)
  };

  const addToCart = () => {
    axios
    .post('http://localhost:4000/api/cart/sendcartitem',{
    'id' : id,   
    'item' : selectedItem
    }
      )
 .then(response=>{
  //  console.log(response.message)
   if(response.status == 200)
   {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.close();
    }
   }
 })
 .catch(err=>{
  if(err.response){
      if(err.response.status == 404){
          alert('Item already exists in cart')
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

  const deleteFromCart = () => {
    axios
    .post('http://localhost:4000/api/cart/deletecartitem',{
    'id' : id,   
    'item' : selectedItem
    }
      )
 .then(response=>{
  //  console.log(response.message)
   if(response.status == 200)
   {
    const modal = document.getElementById('my_modal_1');
    if (modal) {
      modal.close();
    }
   }
 })
 .catch(err=>{
  if(err.response){
      if(err.response.status == 404){
          alert('Item not in cart')
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

  useEffect(() => {
    getProductCards([]);
  }, []);

  const renderCards = () => {
    return displayCards.map((item, index) => (
      <div key={index} className="card w-80 bg-slate-300 shadow-xl mx-4 my-4">
        <br />
        <figure>
          <img src={item.image} className='h-64 w-64'/>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{item.name}</h2>
          <h2 className="card-title font-bold">$ {item.cost}</h2>
          <div className="flex">
            <div className="font-semibold">Type: </div>
            <h2 className="c">{item.type}</h2>
          </div>
          <div className='justify-start'>{item.description}</div>
          <div className="card-actions justify-between">
            {loveicon(index,item)}
            {carticon(index,item)}
            <button
              className="btn bg-slate-800 text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-300"
              onClick={() => handleBuyNow(item)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {renderCards()}
      <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">Are you sure you want to add to cart !!</h3>
    <br />
    <strong><h3 className='flex justify-start'>Product Name : {selectedItem}</h3></strong>
    <br />
    <button className='btn bg-slate-300 hover:bg-green-100 hover:-translate-y-1 hover:scale-110   flex justify-start' onClick={addToCart}>Yes</button>
  </div>
</dialog>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">Are you sure you want to delete from cart !!</h3>
    <br />
    <strong><h3 className='flex justify-start'>Product Name : {selectedItem}</h3></strong>
    <br />
    <button className='btn bg-slate-300 hover:bg-red-100 hover:-translate-y-1 hover:scale-110   flex justify-start' onClick={deleteFromCart}>Yes</button>
  </div>
</dialog>
    </div>
  );
}
