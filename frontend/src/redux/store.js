import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bookingReducer } from './reducers/bookingReducer';
import { carsReducer } from './reducers/carsReducer';


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});


const rootReducer= combineReducers({
 carsReducer ,
 bookingReducer

})

const store = createStore(
    rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;