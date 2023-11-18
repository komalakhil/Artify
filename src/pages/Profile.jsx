import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';


export default function Profile() {

  const { id } = useParams();

  // const sendData = {
  //   "name":name
  // }

  const [data, setData] = useState({
    "Username" : "",
    "Email id" : "",
    "Password" : "",
    "Phone number" : ""
  });

  useEffect(() => {
    // Make a GET request when the component mounts
    console.log(id)
    axios.post('http://localhost:4000/api/users/getusers',{
      "id":id
    })
      .then((response) => {
        // Handle the response data
        console.log(response.data)
        setData({
          "Username" : response.data.username,
          "Email id" : response.data.email,
          "Password" : response.data.password,
          "Phone number" : response.data.phone
        });
      })
      .catch((error) => {
        // Handle errors, e.g., set an error state
        console.error('Error:', error);
      });
  }, []); // Empty dependency array means the effect runs once after the initial render


  return (
    <div>
      <Navbar/>
      <br />
      <div className='flex justify-center w-1/2 mx-auto'>
    <table className='table'>
        <thead>
          <tr>
            <th  className='bg-slate-300 border border-black text-slate-900 font-bold'>Category</th>
            <th  className='bg-slate-300 border border-black text-slate-900 font-bold'>Detail</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <td className = "border border-black font-bold">{key}</td>
              <td className = "border border-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 hover:text-slate-900 hover:font-bold">{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
