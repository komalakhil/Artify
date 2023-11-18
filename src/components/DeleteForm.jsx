import React,{useState} from 'react'
import axios from 'axios';

export default function DeleteForm() {

    const [productNameToDelete, setProductNameToDelete] = useState("");


    const deleteOne = (productName) => async (event) => {
        event.preventDefault();
        console.log('Product Name to Delete:', productName);

        try{
            // Send a POST request to your API using Axios
            const response = await axios.post('http://localhost:4000/api/newproduct/delete', {
                "name" :productName
        });

            // Handle the response, e.g., display a success message
            console.log('Response:', response.status);

            if(response.status == 200){
                document.getElementById('my_modal_5').showModal();
                setProductNameToDelete("");
            }
            
            } catch (error) {
                console.log(error.response.status)
                if(error.response.status == 404){
                    alert("No product with the given name found")
                }
                // Handle errors, e.g., display an error message
                console.error('Error:', error);
            }
         }
        // document.getElementById('my_modal_1').close()
      
        // Here, you can use the productName value to send data to your API or perform other actions.


  return (
    <div>
        <form action="" onSubmit={(event) => deleteOne(productNameToDelete)(event)}>
        <label className="label mt-4">
            Name of the product
      </label>
      <div className="flex">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={productNameToDelete}
  onChange={(e) => setProductNameToDelete(e.target.value)}/>
      </div>
      <br />
      <button className='btn bg-slate-300 hover:bg-red-100 hover:-translate-y-1 hover:scale-110  flex justify-start' type="submit">Delete</button>
      </form>
      <dialog id="my_modal_5" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">A Product Deleted !!</h3>
  </div>
</dialog>
    </div>
  )
}
