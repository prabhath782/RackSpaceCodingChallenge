//importing components
import React, { Component } from 'react';
import{connect} from 'react-redux';

import TableContent from '../TableContentComponent/tableContent';
import Fetch from '../../Store/Actions/fetchData';


//Class Component creating a table
 export class Table extends Component {

// lifecycle-hook method calling action-creator in store    
    componentDidMount(){
        this.props.postRequest()       
    }

    // render method rendering child tablecontent child components return jsx elements
  render() {      
    return (
      <div>
        <TableContent data = {this.props.data}
                      loading = {this.props.loading}
                      error={this.props.error}/>  
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        data:state.table.data,
        loading:state.table.loading,
        error:state.table.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        postRequest:()=>dispatch(Fetch())
    }   
}

//Connect connecting to store to access state of the store
export default connect(mapStateToProps,mapDispatchToProps)(Table);
