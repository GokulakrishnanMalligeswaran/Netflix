import background_image from "../Assets/assets/background_banner.jpg";
import { useState } from "react";
import { login,signup } from "../Firebase";
import netflix_spinner from "../Assets/assets/netflix_spinner.gif"
const Login = () => {
  const [loading,setLoading]=useState(false)
  const [signState,setSignState]=useState(
    "Log In"
    )
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

const user_auth=async (event:React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault();
  setLoading(true)
  if(signState==="Log In"){
    await login(email,password)
  }
  else{
    await signup(name,email,password)
  }
  setLoading(false)
}

  return (
    // loading indication
    loading?<div className="w-full h-screen flex items-center justify-center ">
      <img src={netflix_spinner} alt="" className="w-14"/>
    </div>:
    <div className="flex flex-col  items-center w-screen relative ">
      <img src={background_image} alt=""  className="absolute z-0 md:bg-cover  "/>
      
      <div className="bg-black bg-opacity-80  w-96  p-10 max-h-fit  rounded-md z-10 border shadow-md shadow-gray-800 justify-self-center items-center mt-32">
        <h1 className="text-2xl text-red-600 font-bold text-center">{signState}</h1>
        <form action="" className="flex flex-col py-2 ">
          {signState==="Log In"?null:<input value={name} onChange={(e)=>{setName(e.target.value)}}
            type="text"
            placeholder="Username"
            className="  px-3 py-2 my-2 w-full rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium bg-black bg-opacity-90"
          />}
          
          <input
            type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Email"
            className="px-3 py-2 my-2 w-full rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium bg-black bg-opacity-90"
          />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            placeholder="Password"
            className="px-3 py-2 my-2 w-full rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium bg-black bg-opacity-90 border-"
          />              
            <button className="self-center bg-red-600 text-black px-5 py-2 rounded-md hover:cursor-pointer" type="submit" onClick={user_auth}>{}{signState}</button>
            {signState==="Log In"? <div className="flex">
            <input
              type="checkbox"
              name="checkBox"
              className="mr-1 hover:cursor-pointer "
            />
            <label htmlFor="checkBox"> Remember Me</label>
            <a href="" className="justify-self-end ml-auto">
              Need Help?
            </a>
          </div>:null}
          
        <div>
          {signState==="Log In"?<p className="text-slate-600">
            New to Netflix?{" "}
            <a className="text-white cursor-pointer hover:text-red-600" onClick={()=>{setSignState("Sign up")}}> Sign Up</a>
          </p>:<p className="text-slate-600">
            Already have an account.{" "}
            <a className="text-white cursor-pointer hover:text-red-600"  onClick={()=>{setSignState("Log In")}}> Log In</a>
          </p>} 
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
