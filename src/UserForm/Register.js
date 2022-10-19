import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Register = () => {
    const { registerEmailPassword, updateInfo } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('')


    const handleOnChange = (event) => {
        event.preventDefault();
        const password = event.target.value
        // console.log(password)
        // validate password
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least 1 uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Please should be at least 6 characters.');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character');
            return;
        }
        else {
            setPasswordError('Your Password is Secure');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        console.log(name, email, password, confirmPassword)
        if (password !== confirmPassword) {
            setPasswordError('Password is Did Not Match')
            return;
        }

        registerEmailPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        updateInfo(name)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }



    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col mt-12">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center font-bold">Register</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" />

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            onChange={handleOnChange}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-1"
                            name="confirmPassword"
                            placeholder="Confirm Password" />
                        {
                            passwordError && <p className={`'pb-2' ${passwordError === 'Your Password is Secure' ? 'text-green-600 text-left' : 'text-red-600 text-left'}`}>{passwordError}</p>
                        }
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </Link> and
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b mx-2 border-blue text-blue-600" to='/login'>
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;