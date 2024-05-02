'use client'
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import useAuthStore from '@/store/authStore';
const { Header } = Layout;

const Navbar = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const currentUser = useAuthStore((state) => state.currentUser);
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

    const handleLogout = () =>{
setCurrentUser(null);
setIsLoggedIn(false)
    }
    return (
        <Header>
            <div className="logo" />
            <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link href="/">Home</Link>
                </Menu.Item>
                {isLoggedIn ? (
                    <>
                        <Menu.Item key="profile" icon={<UserOutlined />}>
                            <Link href="/profile">{currentUser?.name}</Link>
                        </Menu.Item>
                        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                            Logout
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item key="login" icon={<UserOutlined />}>
                        <Link href="/login">Login</Link>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    );
};

export default Navbar;
