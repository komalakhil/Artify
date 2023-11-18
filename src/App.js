import './App.css';

//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupAdmin from './pages/SignupAdmin';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminsignup" element={<SignupAdmin/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
        <Route path="/admindashboard/:id" element={<AdminDashboard/>} />
        <Route path="/products/:id" element={<Products/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/cart/:id" element={<Cart/>} />
        <Route path="/payment/:id/:item" element={<Payment/>} />
        <Route path="/orders/:id" element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App;
