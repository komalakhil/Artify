import React,{useState} from 'react'
import axios from 'axios'
import { ImagetoBase64 } from '../utility/ImagetoBase64'

export default function AddForm() {
    const [validcost,setValidcost] = useState(true)
    const [validname,setValidname] = useState(true)
    const [validtype,setValidtype] = useState(true)
    const [validdesc,setValiddesc] = useState(true)

    const checkCost = (cost) => {

      if (/[^0-9]/.test(cost)) {
        setValidcost(false);
        return false
      }
      else{
        // Convert the cost to a number
        const numericCost = parseFloat(cost);
      
        if (!isNaN(numericCost) && numericCost >= 10 && numericCost <= 1000) {
          setValidcost(true);
          return true; // Valid cost value
        } else {
          setValidcost(false);
          return false
        }
      }
    }

    const checkName = (name) => {
      if(name == ''){
        setValidname(false);
        return false;
      }
      else{
        setValidname(true);
        return true;
      }
    }
    const checkType = (name) => {
      if(name == ''){
        setValidtype(false);
        return false
      }
      else{
        setValidtype(true);
        return true;
      }
    }
    const checkDesc = (name) => {
      if(name == ''){
        setValiddesc(false);
        return false
      }
      else{
        setValiddesc(true);
        return true;
      }
    }

  // New state variable to store the selected image file
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange=async(e)=>{

    try {
      const base64Data = await ImagetoBase64(e.target.files[0]);
      setFormData((prev) => {
        return {
          ...prev,
          productImage: base64Data,
        };
      });
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  
}



    const [formData, setFormData] = useState({
        productName: '',
        productType: '',
        productCost: '',
        productDescription: '',
        productImage:''
      });
    
      const { productName, productType, productCost, productDescription,productImage } = formData;

      const handleSubmit = async (e) => {
        e.preventDefault();


          if(checkName(productName) && checkType(productType) && checkCost(productCost) && checkDesc(productDescription)){
              
            try {
                // Create a data object to send in the request body
                const data = {
                  name: productName,
                  type: productType,
                  cost: productCost,
                  description: productDescription,
                  image: productImage
                };


                console.log('Request',data)
                
              // Send a POST request to your API using Axios
              const response = await axios.post('http://localhost:4000/api/newproduct/add', JSON.stringify(data)
              ,{
                headers: {
                  // 'Content-Type': 'multipart/form-data',
                  "content-type":"application/json"
                },
              });
        
              // Handle the response, e.g., display a success message
              console.log('Response:', response);
             
            } catch (error) {
              // Handle errors, e.g., display an error message
              console.error('Error:', error);
            }
          
          // Reset the form after successful submission
          setFormData({
            productName: '',
            productType: '',
            productCost: '',
            productDescription: '',
            productImage:''
          });


          document.getElementById('my_modal_2').showModal()
        }
          
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
            <div className='flex gap-4'>
                <div>
                    <label className="label mt-4">
                        <span className="label-text">Name of the product</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}/>
                {!validname && (
                  <div className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Enter Valid value for name</span>
                </div>
                )}
                </div>
                <div>
                    <label className="label mt-4">
                        <span className="label-text">Type of the product</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}/>
                  {!validtype && (
                    <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Enter Valid value for type</span>
                  </div>
                  )}
                </div>
            </div>
            <label className="label mt-4">
                <span className="label-text">Cost of the product (in INR)</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={productCost}
                onChange={(e) => setFormData({ ...formData, productCost: e.target.value })}/>
            {!validcost && (
                <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Enter Valid value for cost</span>
              </div>
              )}
            <label className="label mt-4">
                <span className="label-text">Description of the product</span>
            </label>
            <textarea placeholder="Type here" className="textarea textarea-bordered textarea-md w-full max-w-xs" value={productDescription}
                onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}></textarea>
            {!validdesc && (
                <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Enter Valid value for description</span>
              </div>
              )}

                      {/* New input field for image upload */}
            <label className="label mt-4">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              type={"file"}
              accept="image/*"
              className="input input-bordered w-full max-w-xs"
              onChange={handleImageChange}
              required // Mark the image input as required
            />
             {/* Display image preview if an image is selected */}
              {selectedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Image"
                    className="mt-2"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
              )}
        </div>
        <br />
        <button className='btn bg-slate-300 hover:bg-green-100 hover:-translate-y-1 hover:scale-110   flex justify-start' type="submit" >Add</button>
        </form> 
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg flex justify-start">New Product Added !!</h3>
  </div>
</dialog>
    </div>
  )
}
