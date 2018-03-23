//importing actiontypes
import * as ActionTypes from './actionTypes';

const compareBy=(key)=>{
   return function (a,b){
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
   }
}

// After sort completion returning type and sorted data to reducer with loading value
const sortComplete = (data)=>{
     return {
        type: ActionTypes.FETCH_DATA,
        payload:data,
        loading:false
    }

}

// dispatches action sortcomplete
const sortColumn = (key,data)=>{
   let arrayData = [...data];
   arrayData.sort(compareBy(key))
   return dispatch=>{
    return dispatch(sortComplete(arrayData))
  }
  

}

export default sortColumn