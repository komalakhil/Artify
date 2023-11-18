import React, { useState, useEffect } from 'react';

export default function Users() {
  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/customer/getcustomers');
        const data = await response.json();
        console.log(data)
        setUserData(data); // Assuming data is an array of user objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setEdit(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array to ensure the effect runs once

  return (
    <div className='mt-4'>
      <div className="flex justify-between">
        <div className="bg-slate-300 border border-solid rounded">
          <h1 className="font-serif text-2xl m-2">Users</h1>
        </div>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table border-collapse">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {edit && <th className="border border-none"></th>}
              <th className='bg-slate-300 border border-black'>Name of the user</th>
              <th className='bg-slate-300 border border-black'>Email Id of the user</th>
              <th className='bg-slate-300 border border-black'>Phone number of the user</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <th className='border border-black'>{index + 1}</th>
                {edit && (
                  <th className="bg-slate-300 border border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {/* ... (your SVG path) */}
                    </svg>
                  </th>
                )}
                <td className='border border-black'>{user.username}</td>
                <td className='border border-black'>{user.email}</td>
                <td className='border border-black'>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
