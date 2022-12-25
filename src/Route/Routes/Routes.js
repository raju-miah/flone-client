import { createBrowserRouter } from "react-router-dom";
import Card from "../../components/Crad/Card";
import MainHome from "../../components/MainHome/MainHome";
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
            }
        ]
    }
])