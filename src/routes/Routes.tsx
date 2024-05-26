import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import AdminLayout from "../components/layout/AdminLayout";

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
        element:<AdminLayout />
    }
])
export default router