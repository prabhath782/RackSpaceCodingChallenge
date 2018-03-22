import axios from 'axios';
import * as ActionTypes from './actionTypes';

const fetchDataSucess = (data)=>{

    return {
        type: ActionTypes.FETCH_DATA,
        payload:data,
        loading:false
    }

}

const fetchFailed = (err)=>{
    return{
        type: ActionTypes.FETCH_ERROR,        
        payload:err
    }
    
}

const fetchData = ()=>{
    console.log('fetching')
    return dispatch=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
               .then(data=>{
                  return dispatch(fetchDataSucess(data.data))
               }).catch(err=>{
                   console.log(err)
                   return dispatch(fetchFailed(err))
               })
    }
}


export default fetchData
