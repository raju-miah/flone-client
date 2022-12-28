import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { userSignUp } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState('password');

    const handelShowPassword = () => {
        setShowPassword('text');
        setTimeout(() => {
            setShowPassword('password');
        }, 2000)
    }


    const handelSignUp = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)

        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
        form.reset();
    }



    return (
        <div className='md:w-[1000px] px-2 w-full m-auto my-16 flex items-center justify-center flex-row-reverse shadow-lg'>
            <div className='w-[500px] h-[640px] p-12 bg-[#2d3250]  rounded-tr-lg rounded-br-lg'>
                <div className='text-white flex items-center justify-between mb-12'>
                    <Link to="/signup" className='border-b-[2px] border-solid border-[#a749ff] pb-1'>Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
                <form onSubmit={handelSignUp}>
                    <h1 className='text-4xl mb-12 text-white'>Create Account</h1>
                    <input name="name" type="text" placeholder='Name'
                        className='p-3 rounded-sm w-full mb-3'
                    />

                    <input name="email" type="text" placeholder='Email'
                        className='p-3 rounded-sm w-full mb-3'
                    />

                    <div className='relative mb-4'>
                        <input name="password" type={showPassword} placeholder='Password'
                            className='p-3 rounded-sm w-full'
                        />
                        < AiFillEye
                            onClick={handelShowPassword}
                            className='absolute right-2 top-4 cursor-pointer text-green-600' />
                    </div>


                    <input type="submit" value="Sign Up"
                        className='border-[1px] uppercase cursor-pointer text-white border-solid  border-[#a749ff] px-24 py-4 mt-4 md:mt-8 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'
                    />
                </form>

                <div className='flex items-center flex-col text-center mt-12'>
                    <span className='mb-5 text-white'>----- OR Sign Up With -----</span>
                    <div className='flex items-center gap-4'>
                        <FcGoogle
                            className="cursor-pointer text-3xl"
                        />
                        <FaTwitter
                            className="cursor-pointer text-3xl text-[#00acee]"
                        />
                        <BsGithub
                            className="cursor-pointer text-3xl text-[#171515]"
                        />
                    </div>
                </div>
            </div>
            <div className='w-[500px]'>
                <img src="https://i.ibb.co/N60vTTv/Mobile-login.jpg" alt=""
                    className='object-cover h-[640px] w-[500px] rounded-tl-lg rounded-bl-lg'
                />
            </div>
        </div>
    );
};

export default SignUp;