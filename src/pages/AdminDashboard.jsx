import React,{useContext} from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { logincontext } from '../contexts/Logincontext'
import AddForm from '../components/AddForm'
import Items from '../components/Items'
import Users from '../components/Users'
import ReLogin from '../components/ReLogin'

export default function AdminDashboard() {

  const mailicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

  const sendicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

 

  const openMailModal = () => {
    console.log('Bello');
    const modal = document.getElementById('my_modal_10');
    modal.setAttribute('open', 'true');
  };
  

  let [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser,setcurrentuser,setUserloginStatus,setloginerror,cartCount,increaseCount]= useContext(logincontext)

  if(UserloginStatus){
  
    return (
      <div>
          <AdminNavbar/>
          <div className='flex justify-start'>
              <h1 className='font-serif text-4xl mt-4 ml-2'>Welcome Admin!!</h1>
          </div>
          <div className='flex justify-end pr-2'>
            <button className='btn bg-slate-300 hover:bg-green-100 hover:-translate-y-1 hover:scale-110' onClick={openMailModal}>{mailicon} Send Update Mail to Users</button>
          </div>
      <br />
  <Items/>
  <Users/>
  {/* Modal */}
  <dialog id="my_modal_10" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg flex justify-start">Are you sure you want to send mails to the users?</h3>
      <br />
      <button className='btn bg-slate-300 hover:bg-green-100 hover:-translate-y-1 hover:scale-110 flex justify-start'>{sendicon}Send</button>
    </div>
  </dialog> 
      </div>
    )
}
else{
  return (
    <ReLogin/>
  )
}
}
