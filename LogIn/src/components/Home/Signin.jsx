import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {

    const navigate = useNavigate()
    
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signin", {
                username, 
                password
            }).then(res=>{
                if(res.data=="exist") {
                    alert("User already Exist")
                }
                else if(res.data=='notexist') {
                    navigate('/home',{state:{id:username}})
                }
            }).catch(e=>{
                alert('Wrong details')
                console.error(e)
            })
        }
        catch(e) {
            console.error(e);
        }
    }

    return (
        <> 
        <div className='m-3 
        font-bold
        font-sans
        text-3xl
        text-white
        '>Welcome!</div>
        <div className='bg-gray-800 mt-9 rounded-3xl p-4 mx-60'>
            <div className='m-5 text-2xl text-blue-300 font-sans font-bold'>
                SignIn
            </div>
            <div>
                <form action="POST" onSubmit={submit}>
                    <div>
                    <input type="text" placeholder='Username' className='rounded-md font-sans font-medium font shadow-sm h-10 w-80 border border-purple-700 p-4'
                    value={username}
                    onChange={(e)=>{setUserName(e.target.value)}}/>
                    </div>
                    <div className='m-5'>
                    <input type="text" 
                    placeholder='Password'
                    className='rounded-md 
                    font-sans font-medium font shadow-sm 
                    h-10 
                    border border-l-purple-700
                    p-4 w-80'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button className='rounded-md
                    font-medium
                    font-sans
                    text-white
                    bg-blue-900
                    p-1'
                    type="submit">
                        Submit
                    </button>

                </form>
            </div>
            <div className='m-4'>
            <Link to='/' className='text-blue-600 underline font-medium font-sans'> Go back to LogIn Page</Link>
            </div>
        </div>
        </>
    )
}