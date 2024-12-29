'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

export default function SignUpPage() {

  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);


  const onSignup = async () => {
    
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login")
    } catch (error: any) {
      console.log("signup failed", error.message)
      // notification
      toast.error(error.message)
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">  
        <h1>{ loading ? "Processing" : "SignUp" }</h1>
        <hr/>
        <label htmlFor="username">Username</label>
        <input className="text-black p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="username" type="text" value={user.username} onChange={(e) => {
          setUser({...user, username: e.target.value})
        }}
        placeholder="username"/>
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
        placeholder="username"/>
        <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "Nothing to Do" : "Signup Here"}</button>
        <Link href="/login">Visit Login Page</Link>
    </div>
  )
}
