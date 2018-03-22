import React, { Component } from 'react';
import{connect} from 'react-redux';

import TableContent from '../TableContentComponent/tableContent';
import Fetch from '../../Store/Actions/fetchData';

 class Table extends Component {

    componentDidMount(){
        this.props.postRequest()       
    }

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

export default connect(mapStateToProps,mapDispatchToProps)(Table);
