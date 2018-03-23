//importing components
import React, {Component} from 'react'
import { Table,Message} from 'semantic-ui-react'
import {connect} from 'react-redux';
import Proptypes from 'prop-types'

import sortColumn from '../../Store/Actions/Sort';
import Loading from './loading';

//Class component creating loading all the data of the table.
export class TableContent extends Component   {  
    constructor(props){
     super(props)
     this.onSort = this.onSort.bind(this);
     this.loadTable = this.loadTable.bind(this);

    }
//componentDidUpdate lifecycle hook    
    componentDidUpdate(){
        this.error = this.props.error
        this.tableContent = this.props.data;  
    }   

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !== this.props.data
    }

//Method calling onSort action creator sorting table onclick on table header    
onSort(key){
    this.props.onSort(key,this.props.data)
}

loadTable(data){
    if(data){
        const tableValues = data.map(data =>(
            <Table.Row key = {data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.userId}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.body}</Table.Cell>
            </Table.Row>)
        )
        return tableValues
    }
    
    return {}
}

// render method rendering the table components return jsx elements
render(){
 // intializing loading component to load when fetching data   
   const loading = (<Loading/>)
   const result = this.props.loading ? loading:this.loadTable(this.props.data)

   // Jsx elements for errors when their is error ing fetching
   const error = (
    <Table.Row>
        <Table.Cell>
            <Message negative>
            <Message.Header>Something Went Wrong</Message.Header>
            </Message>
        </Table.Cell>
        </Table.Row>
   )
   const finalResult = this.props.error?error:result

    return (
        <Table id = 'table'
               color = {'red'}
               style = {{margin:'10px'}}
               celled
               className="ui unstackable striped table segment">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style ={{cursor:'pointer'}} name = 'id' onClick = {()=> this.onSort('id') }>Id</Table.HeaderCell>
              <Table.HeaderCell style ={{cursor:'pointer'}} name = 'userid' onClick = {()=> this.onSort('userId') }>userId</Table.HeaderCell>
              <Table.HeaderCell style ={{cursor:'pointer'}} name = 'title' onClick = {()=> this.onSort('title') }>Title</Table.HeaderCell>
              <Table.HeaderCell style ={{cursor:'pointer'}} name = 'body' onClick = {()=> this.onSort('body') }>Body</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
           <Table.Body>
               {finalResult}
            </Table.Body>
        </Table>
      )
}
    

}


const mapDispatchToProps = (dispatch)=>{
    return{
        onSort:(key,data)=>{dispatch(sortColumn(key,data))}
    }
}

//connect connecting to store to access the state of the store
export default connect(null,mapDispatchToProps)(TableContent)
