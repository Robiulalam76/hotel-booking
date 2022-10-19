import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Rooms from "../Components/Rooms/Rooms";
import Service from "../Components/Service/Service";
import PriveteRoute from "../PriveteRoute/PriveteRoute";
import Login from "../UserForm/Login";
import Profile from "../UserForm/Profile";
import Register from "../UserForm/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: 'home', element: <Home></Home> },
            { path: 'about', element: <About></About> },
            { path: 'service', element: <PriveteRoute><Service></Service></PriveteRoute> },
            { path: 'rooms', element: <PriveteRoute><Rooms></Rooms></PriveteRoute> },
            { path: 'blog', element: <PriveteRoute><Blog></Blog></PriveteRoute> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
            { path: 'profile', element: <PriveteRoute><Profile></Profile></PriveteRoute> },
        ]
    }
])

export default router;