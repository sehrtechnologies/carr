import { GET_ALL_BOOKINGS ,CAR_LIST_REQUEST} from "../../constants/allConstant";

const initialData ={
    bookings:[]
}

export const bookingReducer=(state=initialData,action)=>{
    switch(action.type){
        
        case CAR_LIST_REQUEST:{
            return {bookings:[],loading:true}
        }
        case GET_ALL_BOOKINGS:{
            return {
                ...state,
                bookings:action.payload,
                loading:false
            }
        }
        default : return state;
    }
}