import React from 'react'
import Button from 'react-bootstrap/Button';
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

const Register = () => {
const dispatch= useDispatch()

function onFinish(values){
  console.log(values);
    dispatch(userRegister(values))
}
    return (
    <>
        
      
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
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
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/login">Click Here to Login</Link>
          </Form>
       
      
    </>
  )
}

export default Register