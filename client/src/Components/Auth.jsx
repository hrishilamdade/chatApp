import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import Cookies from 'universal-cookie'


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleChange=(e)=>{

    }
    return (
        <div className='flex flex-col items-center h-screen justify-center text-center bg-indigo-500'>
            <div class="bg-white text-left p-10">
            <p class="text-xl font-bold mb-6">
              {isSignUp?"Sign Up":"Sign in"}
            </p>
            
            <form className='text-left'>
                {
                    isSignUp && ( <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        name='fullName' 
                        type="text" 
                        onChange={handleChange}
                        placeholder="Full Name" 
                        class="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-400 rounded my-2" 
                    />
                    </div>)}
                    <label htmlFor="username">Username</label>
                    <input 
                        name='username'
                        type="text" placeholder="Username"
                        onChange={handleChange}
                        class="text-sm text-gray-base w-full mr-3 
                                py-5 px-4 h-2 border border-gray-400 
                                rounded my-2" 
                    />
                    {
                        isSignUp && ( <div>
                        <label htmlFor="mobile">Mobile</label>
                        <input 
                            name='mobile'
                            type="text" placeholder="Mobile"
                            onChange={handleChange}
                            class="text-sm text-gray-base w-full mr-3 
                                    py-5 px-4 h-2 border border-gray-400 
                                    rounded my-2" 
                        />
                        </div>
                        )
                    }
                     {
                        isSignUp && ( <div>
                        <label htmlFor="avatarURL">Avatar URL</label>
                        <input 
                            name='avatarURL'
                            type="text" placeholder="Avatar URL"
                            onChange={handleChange}
                            class="text-sm text-gray-base w-full mr-3 
                                    py-5 px-4 h-2 border border-gray-400 
                                    rounded my-2" 
                        />
                        </div>
                        )
                    }
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            name='password'
                            type="text" placeholder="Password"
                            onChange={handleChange}
                            class="text-sm text-gray-base w-full mr-3 
                                    py-5 px-4 h-2 border border-gray-400 
                                    rounded my-2" 
                        />
                    </div>
                <Button type="submit" color="primary" className="mt-4">
                    Login
                </Button>
            </form>
        </div>
        </div>
    )
}

export default Auth
