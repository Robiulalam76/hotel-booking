import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Rooms from "../Components/Rooms/Rooms";
import Service from "../Components/Service/Service";
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
            { path: 'service', element: <Service></Service> },
            { path: 'rooms', element: <Rooms></Rooms> },
            { path: 'blog', element: <Blog></Blog> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
            { path: 'profile', element: <Profile></Profile> },
        ]
    }
])

export default router;