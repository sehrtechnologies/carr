import axios from "axios";
import {message,Alert } from 'antd'


export const userRegister=(reqObj)=>async dispatch=>{
    try {
        
        const response= await axios.post('https://carilia-car-rental-backend.onrender.com/api/users/register',reqObj)
        if(response){
            message.success('registration  success')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500); 
        }
          

    } catch (error) {
        message.error('Username already exist  !')
        console.log(error);
    }
}

export const userLogin=(reqObj)=>async dispatch=>{

    try {
        const response= await axios.post('https://carilia-car-rental-backend.onrender.com/api/users/login',reqObj);
     
        localStorage.setItem('user',JSON.stringify(response.data))
       message.success('Login success')
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
      
    } catch (error) {
        console.log(error);
        message.error('Something went wrong....')
    }
}
