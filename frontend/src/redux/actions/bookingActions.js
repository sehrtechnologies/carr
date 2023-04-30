import axios from "axios";
import { message } from "antd";
import { GET_ALL_BOOKINGS ,CAR_LIST_REQUEST} from "../../constants/allConstant";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    
    await axios.post("https://carilia-car-rental-backend.onrender.com/api/bookings/bookcar", reqObj);

    message.success("Your car booked successfully");
    setTimeout(() => {
      window.location.href = "/userbookings";
    }, 1000);
  } catch (error) {
    console.log(error);
    message.error("Something went wrong , please try later");
  }
};
export const getallBookings = () => async (dispatch) => {
  try {
    dispatch({type:CAR_LIST_REQUEST})
    const response = await axios.get("https://carilia-car-rental-backend.onrender.com/api/bookings/getallbookings");
    dispatch({ type: GET_ALL_BOOKINGS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
