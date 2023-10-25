import React, { useState } from 'react'
import "./main.css";
import Label from './Admin/Layouts/Label';
import LoginCard from '@/app/Componenets/Card/LoginCard';
import NavBar from '@/app/Componenets/Bar/NavBar';
import axios from 'axios';

function Login() {

  const [email, setEmailAddress] = useState("");
  const [password, setPasswordd] = useState("");

   const handleLoginSubmit = async (event) => {
    event.preventDefault();

          try {
            const response = await axios.post('http://localhost:5000/user/login', { email, password });
            localStorage.setItem('token', response.data.token);
            window.location.href = '/Login';
          } catch (error) {
            console.error(error);
            alert('Invalid credentials');
          }
        }
        const signupbutton = async (event) => {

         
          event.preventDefault();
          window.location.href = '/Admin/Dashboard';
        }

  return (
    <div className="flex bg-white min-h-screen flex-col items-center">
      <NavBar/>
        <div class="mt-8 max-w-md text-gray-900  dark:text-white ">
            <div class="flex flex-col py-3">
                <h1 class="mb-8 text-2xl font-bold tracking-tight text-gray-700 gray:text-gray"> Entertainment (Pvt) Ltd</h1>
                
                    <LoginCard>
                      <form onSubmit={handleLoginSubmit}><h1 class="mb-4 text-2xl font-bold tracking-tight text-gray-700 gray:text-gray">Sign in</h1>
                        <Label Labelname="User Name"/>
                        <input 
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        class="mb-8 text-2xl font-bold tracking-tight text-gray-700 gray:text-gray border border-gray-300"  required/>

                        <Label Labelname="Password"/>
                        <input 
                         type="password"
                         className="form-control"
                         id="password"
                         placeholder="password"
                         name="password"
                         onChange={(e) => setPasswordd(e.target.value)}
                        class="mb-8 text-2xl font-bold tracking-tight text-gray-700 gray:text-gray border border-gray-300"  required/>

                        <button onClick={signupbutton} type="submit" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Login</button>
                        
                      </form>
                        
                    </LoginCard>
            </div>
        </div>
    </div>
  )
}

export default Login