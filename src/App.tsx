import Footer from "./components/Footer"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import TitleCards from "./components/TitleCards"
// import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div className="bg-black bg-opacity-90">
      <Navbar/>
      <Routes>
        <Route path="/" element={<TitleCards/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App