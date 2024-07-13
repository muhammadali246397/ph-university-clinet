import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Admindashboard from "../pages/admin/Admindashboard";
import CreateFacalty from "../pages/admin/CreateFacalty";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/contact',
                element:<Contact />
            }
        ]
    },
    {
        path:'/admin',
        element:<App />,
        children:[
            {
                index:true,
                element:<Admindashboard />
            },
            {
                path:'create-facalty',
                element:<CreateFacalty />
            },
            {
                path:'create-student',
                element:<CreateStudent />
            }
        ]
    }
])
export default router