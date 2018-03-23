// importing actiontypes
import  * as ActionTypes from '../Actions/actionTypes';

// intialstate of the store
const intialState = {
    data:[],
    loading:true,
    error:null
}

// reducer
const tableReducer = (state = intialState,action)=>{
 
    //checking action type and updating the state of the store
    switch(action.type){
        case ActionTypes.FETCH_DATA:
        return {
              ...state,
              ...state.data,
              data:action.payload,
              loading:action.loading        
        }

        case ActionTypes.SORT_COLUMN:
        return {
            ...state,
            ...state.data,
            data:action.data,
            loading:action.loading
        }

        case ActionTypes.FETCH_ERROR:
        return{
            ...state,
            ...state.data,
            error:action.payload
        }

        default:
        return state

    }

}

//exporting reducer
export default tableReducer