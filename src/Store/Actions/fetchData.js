// Importing components
import axios from 'axios';
import * as ActionTypes from './actionTypes';

// fetchDataSucess method return type and data to reducer
const fetchDataSucess = (data)=>{
    return {
        type: ActionTypes.FETCH_DATA,
        payload:data,
        loading:false
    }

}

//If http request failed return object type and error caused failure
const fetchFailed = (err)=>{
    return{
        type: ActionTypes.FETCH_ERROR,        
        payload:err
    }
    
}


// Performing http get request getting promise of data or error and dispatching the actions to reducers
const fetchData = ()=>{
    return dispatch=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
               .then(data=>{
                  return dispatch(fetchDataSucess(data.data))
               }).catch(err=>{                   
                   return dispatch(fetchFailed(err))
               })
    }
}

// exporting 
export default fetchData
