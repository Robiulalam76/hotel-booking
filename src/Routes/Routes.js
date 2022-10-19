import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Service from "../Components/Service/Service";
import Login from "../UserForm/Login";
import Register from "../UserForm/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: 'home', element: <Home></Home> },
            { path: 'about', element: <About></About> },
            { path: 'service', element: <Service></Service> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
        ]
    }
])

export default router;