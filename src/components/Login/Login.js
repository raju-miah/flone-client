import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { userLogin } = useContext(AuthContext);


    const handelLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
        form.reset();
    }




    return (
        <div className='md:w-[1170px] px-2 w-full m-auto my-16 flex items-center justify-center'>
            <div className='w-[500px] h-[640px] p-12 bg-[#2d3250]  rounded-tl-lg rounded-bl-lg'>
                <div className='text-white flex items-center justify-between mb-12'>
                    <Link to="/login" className='border-b-[2px] border-solid border-[#a749ff] pb-1'>Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <form onSubmit={handelLogin}>
                    <h1 className='text-4xl mb-12 text-white'>Welcome Again</h1>
                    <input name="email" type="text" placeholder='Email'
                        className='p-3 rounded-sm w-full mb-3'
                    />

                    <div className='relative mb-4'>
                        <input name="password" type="password" placeholder='Password'
                            className='p-3 rounded-sm w-full'
                        />
                        < AiFillEye className='absolute right-2 top-4' />
                    </div>

                    <div className='flex justify-between items-center flex-row-reverse mt-4'>
                        <Link><p className="text-white">Forget Password?</p></Link>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" />
                            <p className='text-white'>Remember Me!</p>
                        </div>
                    </div>

                    <input type="submit" value="Login"
                        className='border-[1px] uppercase cursor-pointer text-white border-solid  border-[#a749ff] px-24 py-4 mt-4 md:mt-8 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'
                    />
                </form>

                <div className='flex items-center flex-col text-center mt-12'>
                    <span className='mb-5 text-white'>----- OR Login With -----</span>
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
                <img src="https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/Abstract%20technical%20lock%20background%20stock%20illustration.jpg?itok=WGQRcJjZ" alt=""
                    className='object-cover h-[640px] w-[500px] rounded-tr-lg rounded-br-lg'
                />
            </div>
        </div>
    );
};

export default Login;