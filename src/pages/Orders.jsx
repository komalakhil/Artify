import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Define an asynchronous function to fetch data from the backend
    const fetchData = async () => {
      try {
        // Replace 'YOUR_BACKEND_URL/orders' with the actual URL of your backend endpoint for fetching orders
        const response = await axios.get(`http://localhost:4000/api/order/getorders`,id);
        setOrders(response.data); // Assuming the response.data is an array of orders
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle the error
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [id]); // Include 'id' in the dependency array to fetch data whenever 'id' changes

  return (
    <div>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {/* Display order details here */}
            {/* For example: */}
            <p>Order ID: {order._id}</p>
            <p>Item: {order.type}</p>
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
