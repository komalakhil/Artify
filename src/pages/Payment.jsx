import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function Payment() {
  const { id, item } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankname: '',
    message: '',
    id : '',
    item : ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear the error message when the user starts typing
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate each field
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card Number is required';
      isValid = false;
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = 'Expiry Date is required';
      isValid = false;
    }

    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // If the form is not valid, don't submit
      console.log('Wrong')
      return;
    }

    try {
      formData.id = id
      formData.item = item
      // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend endpoint
      const response = await axios.post('http://localhost:4000/api/order/sendorder', formData);
      console.log('Response from backend:', response.data);
      // Handle the response or redirect as needed
    } catch (error) {
      console.error('Error sending data to the backend:', error);
      // Handle the error
    }
    document.getElementById('my_modal_1').showModal();
    setFormData({
      firstName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      bankname: '',
      message: '',
      id : '',
      item : ''
    });
  };

  const submitOrder = () => {
    navigate(`/dashboard/${id}`)
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className='text-4xl font-sans '>
        You are about to book <strong>{item}</strong>
      </div>
      <br />
      <div className=''>
        <div className="container mx-auto mt-8">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-slate-300 p-8 border border-gray-300 shadow-md rounded-md">
            {/* ... Existing code ... */}
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">Cardholder name</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.firstName && 'border-red-500'}`}
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            {/* Card Number */}
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">Card Number</span>
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.cardNumber && 'border-red-500'}`}
                required
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
            </div>
            {/* Expiry Date */}
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">Expiry Date</span>
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.expiryDate && 'border-red-500'}`}
                required
              />
              {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
            </div>
            {/* CVV */}
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.cvv && 'border-red-500'}`}
                required
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
            </div>
            {/* ... Existing code ... */}
            
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">Bank Name</span>
              </label>
              <input
                type="text"
                id="bankname"
                name="bankname"
                value={formData.bankname}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.bankname && 'border-red-500'}`}
                required
              />
              {errors.bankname && <p className="text-red-500 text-sm mt-1">{errors.bankname}</p>}
            </div>
            <div className="mb-4">
              <label className="label mt-4">
                <span className="label-text">Any Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded-md ${errors.message && 'border-red-500'}`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn bg-slate-800 text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-300">
              Make Payment
            </button>
          </form>
        </div>
      </div>
      {/* ... Existing code ... */}
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={submitOrder}>✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">
    Payment Finished
    &
    Order Placed
    </h3>
    {/* <button className='btn bg-slate-300 hover:bg-red-100 hover:-translate-y-1 hover:scale-110 flex justify-end'  onClick={handleDelete()}>Yes</button> */}
    <button className='btn bg-slate-300 hover:bg-white hover:-translate-y-1 hover:scale-110   flex justify-start' onClick={submitOrder}>Okay</button>
  </div>
</dialog>
    </div>
  );
}
