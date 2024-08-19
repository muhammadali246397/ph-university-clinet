import { Layout, Menu } from "antd";
import { sidebarItemGenaretor } from "../../utils/sideBarItems";
import { adminPaths2 } from "../../routes/admin.route";
import { facultyRoute } from "../../routes/faculty.route";
import { studentRoute } from "../../routes/student.route";

const { Sider } = Layout;

const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}

const Sidebar = () => {
    const role = 'admin'
    let siderItems;
    switch(role){
        case userRole.ADMIN:
            siderItems = sidebarItemGenaretor(adminPaths2, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            siderItems = sidebarItemGenaretor(facultyRoute, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            siderItems= sidebarItemGenaretor(studentRoute, userRole.STUDENT)
    }
    return (
        <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div
                style={{
                    height:'4rem',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <h1 style={{color:'white',}}>PH-UNIVERSITY</h1>

                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={(siderItems)} />
            </Sider>
    );
};

export default Sidebar;