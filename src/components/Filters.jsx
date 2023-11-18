import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { logincontext } from '../contexts/Logincontext';

export default function Filters() {
  const [labelValues, setLabelValues] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [totalItems,setTotalItems] = useState([])
  // const [applyFilters,setApplyFilters] = useState(true);

  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount,productCards,displayCards,getProductCards,getAllProductDetails]= useContext(logincontext)

    const filtericon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>

  useEffect(() => {
  // Use a Set to store unique values
  const uniqueTypes = new Set();

  // Iterate through the objects and add their 'type' property to the Set
  productCards.forEach(obj => {
    uniqueTypes.add(obj.type);
  });

  // Convert the Set to an array before setting the state
  setLabelValues([...uniqueTypes]);
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleCheckboxChange = (value) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  const handleApplyFilters = () => {
    
    // Extract the checked items
    const checkedItemsArray = Object.entries(checkedItems)
      .filter(([key, value]) => value)
      .map(([key]) => key);
  
    console.log(checkedItemsArray);
  
    const filteredObjects = getProductCards(checkedItemsArray);
  
    console.log(filteredObjects);

  };

  const openRequest = () => {
    document.getElementById('my_modal_5').showModal()
  }

  const submitRequest = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.close();
    }
  }
  
  return (
    <div className='flex w-1/5'>
      <div>
        <div className='flex justify-center text-2xl px-3 font-bold'>Apply</div>
        <div className='flex justify-center text-2xl px-3 font-bold'>Filters!</div>
        <br />
        <div className='flex flex-col justify-center'>
          {labelValues.map((value, index) => (
            <label key={index} className="cursor-pointer label px-3">
              <div className="label-text text-slate-800 text-base font-semibold">
                {value}
              </div>
              <input
                type="checkbox"
                className="checkbox checkbox-accent bg-white"
                checked={checkedItems[value] || false}
                onChange={() => handleCheckboxChange(value)}
              />
            </label>
          ))}
          <br />
          <button className='btn flex gap-2 bg-slate-800 text-white  hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-300' onClick={handleApplyFilters}>
          Apply Filters
        </button>
        <br />
        <button className='btn flex gap-2 bg-slate-800 text-white  hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-300' onClick={openRequest}>
          Request for a product
        </button>
        </div>
        <dialog id="my_modal_5" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <div className='text-2xl font-semibold'>Request for the product</div>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <br />
    <form>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Name of the Product</span>
                </label>
                <input
                type="text"
                placeholder="Enter the name of the product"
                className="input input-bordered"
                />
            </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Type of the Product</span>
            </label>
            <input
              type="email"
              placeholder="Enter the type of the product"
              className="input input-bordered"
            />
          </div>
          <div className='form-control mt-4'>
          <label className="label">
              <span className="label-text">Expected Cost</span>
            </label>
          <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Enter expected cost"
                className="input input-bordered"
            />
            </div>
        </div>
        </form>
        <br />
    <button className='btn bg-slate-300 hover:bg-slate-300 hover:-translate-y-1 hover:scale-110   flex justify-start' onClick={submitRequest}>Send Request</button>
  </div>
</dialog>
      </div>
    </div>
  );
}
