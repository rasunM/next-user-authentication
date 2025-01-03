'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

export default function LoginPage() {

  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })

  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {

    try {

      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data)
      toast.success("Login success");
      router.push("/profile");

    } catch (error: any) {

      console.log("Login Failed", error.message);
      toast.error(error.message);
      
    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">  
        <h1>{loading ? "Processing" : "Login Page"}</h1>
        <hr/>
        <label htmlFor="email">Email</label>
        <input className="text-black p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="email" type="email" value={user.email} onChange={(e) => {
          setUser({...user, email: e.target.value})
        }}
        placeholder="Email"/>
        <hr/>
        <label htmlFor="password">pasword</label>
        <input className="text-black p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => {
          setUser({...user, password: e.target.value})
        }}
        placeholder="password"/>
        <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
          {buttonDisabled ? "Nothing to Do" : "LogIn Here"}
        </button>
        <Link href="/signup">Visit SignUp Page</Link>
    </div>
  )
}
