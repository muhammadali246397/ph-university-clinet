import Courses from "../pages/student/Courses";
import LeaderBoard from "../pages/student/LeaderBoard";
import StudentDashboard from "../pages/student/StudentDashboard";


export const studentRoute = [
    {
        name:'Dashboard',
        path:'dashboard',
        element:<StudentDashboard/>
    },
    {
        name:'Courses',
        path:'courses',
        element:<Courses/>
    },
    {
        name:'Leader board',
        path:'leader-board',
        element:<LeaderBoard/>
    }
]