import React,{useState,useEffect} from "react";
import axios from 'axios';
import AddForm from "./AddForm";
import DeleteForm from "./DeleteForm";

export default function Items() {

  const [data, setData] = useState([]);
  const [divId,setDivId] = useState('');

  useEffect(() => {
    // Make an Axios GET request to your backend API to fetch the data
    axios.get('http://localhost:4000/api/newproduct/getproducts')
      .then(response => {
        // Update the "data" state with the data from the API response
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const [edit,setEdit] = useState(false);

  const handleAdd =() => {
      document.getElementById('my_modal_3').showModal()
  }
 
 const handleEdit =() => {
    setEdit(true);
 }

 const showDeleteModal = (event) => {
  // console.log(event);
  // console.log("Hello");
  // const id = event.target.id;
  // console.log(id);
  // setDivId(id);
  document.getElementById('my_modal_1').showModal()
 }




//  const handleDelete = async () => {
//   try {
//     console.log('Hello')
//     const ind=2;
//     // const ind = event.currentTarget.id;
//     console.log("hello1");
//     // Get the record to be deleted by index
//     const recordToDelete = data[ind-1];

//     // Send a DELETE request to your API with the record's ID or any identifier
//     await axios.delete(`http://localhost:4000/api/deleteproduct/${recordToDelete.id}`);

//     // Remove the deleted record from the "data" state
//     const updatedData = [...data];
//     updatedData.splice(ind, 1);
//     setData(updatedData);
//   } catch (error) {
//     console.error('Error deleting record:', error);
//   }
// };

 useEffect(() => {
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
    <div>
      <div className="flex justify-between ">
        <div className="bg-slate-300 border border-solid rounded">
          <h1 className="font-serif text-2xl m-2">Items</h1>
        </div>
        <div>
        <ul className="menu menu-horizontal z-20">   
            <li className="z-20">
                <details>
                <summary className='text-xl w-64 border border-solid border-slate-300 drop-shadow-md bg-slate-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>

                    Manage Items
                </summary>
                <ul className="p-2 bg-slate-300 w-64">
                    <li className='text-lg'>
                        <a className=' hover:bg-base-100' onClick={handleAdd}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                            Add Item
                        </a>
                    </li>
                    <li className='text-lg'>
                        <a className='hover:bg-base-100' onClick={handleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                            Edit Item
                        </a>
                    </li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
      </div>
      <br />
      <div className="overflow-x-auto">
      <table className="table border">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          {edit && (
            <>
              <th className="border border-none"></th>
              {/* <th className="border border-none"></th> */}
            </>
          )}
          <th className="bg-slate-300 border border-black ">Name of the product</th>
          <th className="bg-slate-300 border border-black ">Type of the product</th>
          <th className="bg-slate-300 border border-black ">Cost of the product</th>
          <th className="bg-slate-300 border border-black ">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <th className="border border-black">{index + 1}</th>
            {edit && (
                <>
                <th id = '4' className="bg-red-300 border border-black hover:-translate-y-1 hover:scale-110" onClick={() => showDeleteModal(index)}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </th>

              {/* <th className="bg-slate-300 border border-black hover:-translate-y-1 hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

              </th> */}

              </>
              )}
            <td className="border border-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 hover:text-slate-900 hover:font-bold">{item.name}</td>
            <td className="border border-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 hover:text-slate-900 hover:font-bold">{item.type}</td>
            <td className="border border-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 hover:text-slate-900 hover:font-bold">$ {item.cost}</td>
            <td className="border border-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 hover:text-slate-900 hover:font-bold">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      {/* Modal */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">Create a product !!</h3>
    <AddForm/>
  
  </div>
</dialog>

{/* Modal */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">Are you sure to delete the product?</h3>
    <DeleteForm/>
    {/* <button className='btn bg-slate-300 hover:bg-red-100 hover:-translate-y-1 hover:scale-110 flex justify-end'  onClick={handleDelete()}>Yes</button> */}
  
  </div>
</dialog>

    </div>
  );
}
