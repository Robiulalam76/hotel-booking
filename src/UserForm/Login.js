import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Login = () => {
    const { logInEmailPassword } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value

        logInEmailPassword(email, password)
            .then((userCredential) => {
                // login 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center font-bold">Login</h1>
                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input

                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
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
                        Your are not Account?
                        <Link className="no-underline border-b border-blue text-blue" to='/register'>
                            Register
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;