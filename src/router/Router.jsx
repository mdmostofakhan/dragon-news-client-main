import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Registers from "../pages/Register/Registers";
import PrivateRouter from "./PrivateRouter";
import Terms from "../pages/sharet/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/"></Navigate>
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Registers></Registers>
            },
            {
                path: "/terms",
                element:<Terms></Terms>
            }
        ]
    },
   {
    path: 'category',
    element: <Main></Main>,
    children: [
        {
            path: ':id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
   },
   {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
        {
            path: ':id',
            element: <PrivateRouter><News></News></PrivateRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
   }
])

export default router;