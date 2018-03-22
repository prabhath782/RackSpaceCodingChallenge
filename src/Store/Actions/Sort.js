import * as ActionTypes from './actionTypes';

const compareBy=(key)=>{
   return function (a,b){
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
   }
}

const sortComplete = (data)=>{
     return {
        type: ActionTypes.FETCH_DATA,
        payload:data,
        loading:false
    }

}

const sortColumn = (key,data)=>{
   let arrayData = [...data];
   arrayData.sort(compareBy(key))
  return dispatch=>{
    return dispatch(sortComplete(arrayData))
  }
  

}

export default sortColumn