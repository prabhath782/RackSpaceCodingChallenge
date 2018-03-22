import  * as ActionTypes from '../Actions/actionTypes';

const intialState = {
    data:[],
    loading:true,
    error:null
}

const tableReducer = (state = intialState,action)=>{
 
    switch(action.type){
        case ActionTypes.FETCH_DATA:
        console.log('reducer');
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

export default tableReducer