import { createBrowserRouter } from "react-router-dom";
import Card from "../../components/Crad/Card";
import Login from "../../components/Login/Login";
import MainHome from "../../components/MainHome/MainHome";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../layout/Main";



export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/card',
                element: <Card></Card>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])