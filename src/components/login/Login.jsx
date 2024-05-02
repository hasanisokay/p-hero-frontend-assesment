'use client'
import React, { startTransition, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import useAuthStore from '@/store/authStore';
import { useRouter, useSearchParams } from 'next/navigation';
const Login = () => {
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
    const currentUser = useAuthStore((state) => state.currentUser);
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const router = useRouter();
    const { refresh, push } = router;

    const loginMutation = useMutation((formData) =>
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json())
    );

    const onFinish = (values) => {
        loginMutation.mutate(values, {
            onSuccess: (data) => {
                if(data.status ===200){
                    toast.success(data.message);
                    setCurrentUser(data.user);
                    setIsLoggedIn(true) 
                }
                else if(data.status ===404){
                    toast.error(data.message)
                }
            },
            onError: (error) => {
                toast.error("Error! Please try again.")
                console.error('Login failed:', error);
            },
        });
    };
    useEffect(() => {
        if (currentUser) {
            startTransition(() => {
                refresh()
                push(from);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser])
    return (
        <>
            <Form
                name="normal_login"
                className="login-form lg:w-[40%] md:w-[70%] w-[90%] mx-auto"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <h3 className='text-3xl text-center my-4 font-semibold'>Login</h3>
                <div className='text-center font-semibold'>
                <p>Please use below credential for test case</p>
                <p>username: guest
                </p>
                <p>password: 123456</p>
                </div>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Link className="login-form-forgot" href="/identity">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <span className='ml-2'>Or,
                        <Link href="/signup"> signup now!</Link>
                    </span>
                </Form.Item>
            </Form>
        </>

    );
};
export default Login;