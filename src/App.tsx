import Login from "./components/Login"
import {Routes,Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Player from "./pages/Player"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./Firebase"
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("logged in")
        navigate('/')
      }
      else{
        console.log("logged out")
        navigate('/login')
      }
    })
  },[])
  return (
    <div className="">
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player />} />
        </Routes>
    </div>
  )
}

export default App