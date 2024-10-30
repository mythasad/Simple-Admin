import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from "./components/dashboard/AdminDashboard";
import UserDashboard from "./components/dashboard/UserDashboard";
import Login from './components/users/Login';
import SignUp from './components/users/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDashboard />} />  
        <Route path='/login' element={<Login/>} /> 
        <Route path='/signup' element={<SignUp/>}/>   
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
