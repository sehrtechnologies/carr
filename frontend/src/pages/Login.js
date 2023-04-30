import React from 'react'
import Button from 'react-bootstrap/Button';
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';

const Login = () => {
const dispatch= useDispatch()

function onFinish(values){
 dispatch(userLogin(values))
}
    return (
    <>
        
      
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Log in</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            

            <button className="btn1 mt-2 mb-3">Login</button>
            <br />

            <Link to="/register">Click Here to Register</Link>
          </Form>
       
      
    </>
  )
}

export default Login