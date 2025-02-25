import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Ourmenu from "../pages/OurMenu/Ourmenu";
import Contactus from "../pages/contactus/Contactus";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/our-menu",
                element: <Ourmenu></Ourmenu>
            },
            {
                path: "/contact-us",
                element: <Contactus></Contactus>
            }
        ]
    },
]);