const { GET_ALL_CARS ,CAR_LIST_REQUEST} = require("../../constants/allConstant");

const initialData={
    cars:[]
}

export const carsReducer=(state=initialData,action)=>{
    switch(action.type ){

        case CAR_LIST_REQUEST:{
            return {
                cars:[],loading:true
            }
        }

        case GET_ALL_CARS:{
            return {
                ...state,
                cars:action.payload,
                loading:false
            }
        }
        default :return state;
    }
}
