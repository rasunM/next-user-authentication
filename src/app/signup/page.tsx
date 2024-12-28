'use client'
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"

export default function SignUpPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">  
        <h1>SignUp Page</h1>
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
        <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup Here</button>
        <Link href="/login">Visit Login Page</Link>
    </div>
  )
}
