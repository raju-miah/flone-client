import { createBrowserRouter } from "react-router-dom";
import Card from "../../components/Crad/Card";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";



export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/card',
                element: <Card></Card>
            }
        ]
    }
])