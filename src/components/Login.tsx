import React from 'react'
import logo from "../Assets/assets/logo.png"
import background_image from "../Assets/assets/background_banner.jpg"
const Login = () => {
  return (
    <div className="flex flex-col text-white items-center w-full h-full py-[100px] bg-[url(${background_image})]">
            <h1 className="text-2xl text-red-600 font-bold">Log In</h1>
            <form action="" className="flex flex-col py-2">
                <input type="text" placeholder='Username' className="px-3 py-2 my-2 w-[400px] rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium"/>
                <input type="email" placeholder='Email' className="px-3 py-2 my-2 w-[400px] rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium"/>
                <input type="password" placeholder='Password' className="px-3 py-2 my-2 w-[400px] rounded-md focus:border-[2px] border-red-600 outline-none text-red-600 font-medium"/>
                <input type="submit" placeholder='Sign In' className="self-center bg-red-600 text-black px-5 py-2 rounded-md hover:cursor-pointer" />
                <div>
                    <input type="checkbox" name="checkBox" className="hover:cursor-pointer"/>
                    <label htmlFor="checkBox"> Remember Me</label>
                </div>
                <a href="">Need Help?</a>
            </form>
    </div>
  )
}

export default Login