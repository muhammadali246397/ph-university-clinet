
import { Layout, Menu, MenuProps, } from 'antd';
import { Outlet } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: '01',
        label: 'Dashboard',

    },
    {
        key: '02',
        label: 'Profile',
    },
    {
        key: '03',
        label: 'User Manegment',
        children: [
            {
                key: '11',
                label: 'Create admin'
            },
            {
                key: '22',
                label: 'Create Student'
            }
        ]
    },


]



const MainLayout = () => {
    return (
        <Layout>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;