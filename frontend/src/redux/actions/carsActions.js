import axios from 'axios';
import { GET_ALL_CARS,CAR_LIST_REQUEST } from '../../constants/allConstant'

export const getAllCars=()=>async dispatch=>{
      try {
        dispatch({type:CAR_LIST_REQUEST})
        const response = await axios.get('https://carilia-car-rental-backend.onrender.com/api/cars/getallcars')
        dispatch({   type:GET_ALL_CARS, payload:response.data  })
      } catch (error) {
          console.log(error);
      }
  
  }

 export const searchCars=(searchKey)=>async  (dispatch)=>{
  try {
    const response= await axios.get('https://carilia-car-rental-backend.onrender.com/api/cars/getallcars')
    const cars= response.data
    const filteredCars = cars.filter(car=>car.brand.toLowerCase().includes(searchKey.toLowerCase()))
    dispatch({type:GET_ALL_CARS,payload:filteredCars})
  } catch (error) {
    console.log(error);
  }
 } 

 export const sortCars=(values)=>async (dispatch) =>{
  try {
    const response= await axios.get('https://carilia-car-rental-backend.onrender.com/api/cars/getallcars')
    const cars= response.data
    var filteredCars = cars

    if(values.rentPerHour!==undefined){
      filteredCars = cars.filter(car=>car.rentPerHour  >= values.rentPerHour )
     
    }
    dispatch({type:GET_ALL_CARS,payload:filteredCars})
    console.log(filteredCars);
  } catch (error) {
    console.log(error);
  }
 }
  
