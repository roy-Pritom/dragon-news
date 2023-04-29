import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Category></Category>,
        loader: () => fetch('http://localhost:3000/news/')
      },
      {
        path: '/categories/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)

      }
    ]

  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: '/news/:id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
      },
    ]
  },
  {
    path:'/login',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login/login',
        element:<Login></Login>
      },
      {
        path:'/login/register',
        element:<Register></Register>
      },
      {
        path:'/login/terms',
        element:<Terms></Terms>
      },
    ]
  }

]);


export default router;