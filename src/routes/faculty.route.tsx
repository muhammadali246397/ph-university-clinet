import FacultyDashboard from "../pages/facalty/FacultyDashboard";
import OfferedCourse from "../pages/facalty/OfferedCourse";

export const facultyRoute = [
    {
        name:'Dashboard',
        path:'dashboard',
        element:<FacultyDashboard/>
    },
    {
        name:'Offerd course',
        path:'offerd-course',
        element:<OfferedCourse/>
    }
]