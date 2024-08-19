import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact"; 
import { adminPaths2 } from "./admin.route";
import { routeGenerator } from "../utils/routeGenaretor";
import { facultyRoute } from "./faculty.route";
import { studentRoute } from "./student.route";

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
        children:routeGenerator(adminPaths2)
    },
    {
        path:'/faculty',
        element:<App/>,
        children:routeGenerator(facultyRoute)
    },
    {
        path:'/student',
        element:<App/>,
        children:routeGenerator(studentRoute)
    }
])
export default router