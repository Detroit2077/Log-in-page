import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/login", {
                username,
                password,
            });

            if (res.data === "exist") {
                navigate('/home', { state: { id: username } });
            } else if (res.data === 'notexist') {
                alert("User has not SIGNED UP");
            }
        } catch (error) {
            alert('Wrong details');
            console.error(error);
        }
    }

    return (
        <>
            <div className='m-3 font-bold font-sans text-3xl text-white'>Welcome!</div>
            <div className='bg-gray-800 mt-9 rounded-3xl p-4 mx-60'>
                <div className='m-5 text-2xl text-blue-300 font-sans font-bold'>Login</div>
                <div>
                    <form onSubmit={submit}>
                        <div>
                            <input
                                type="text"
                                placeholder='Username'
                                className='rounded-md font-sans font-medium shadow-sm h-10 w-80 border border-purple-700 p-4'
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='m-5'>
                            <input
                                type="password"
                                placeholder='Password'
                                className='rounded-md font-sans font-medium shadow-sm h-10 border border-purple-700 p-4 w-80'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className='rounded-md font-medium font-sans text-white bg-blue-900 p-1'
                            type='submit'
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='m-4'>
                    <Link to='/signup' className='font-medium font-sans text-blue-600 underline'>
                        Not a Member Yet?
                    </Link>
                </div>
            </div>
        </>
    );
}
