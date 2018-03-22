import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Table,Loader,Dimmer,Image,Segment,Message } from 'semantic-ui-react'
import {connect} from 'react-redux';
import sortColumn from '../../Store/Actions/Sort';

import Loading from './loading';

class TableContent extends Component   {  
    constructor(props){
     super(props)
     this.onSort = this.onSort.bind(this);
    }

onSort(key){
    console.log('thead'+key+'is clicked')
    console.log(this.props.data)
    this.props.onSort(key,this.props.data)
}

componentDidUpdate(){
    console.log(this.props.error)
    this.error = this.props.error
    
}

render(){
console.log(this.props.loading)


    const loading = (
        <Table.Row>
            <Table.Cell>
        <Dimmer active inverted>
          <Loader size='massive' />
        </Dimmer>
        <Image src="https://semantic-ui.com/images/wireframe/short-paragraph.png"/>
        </Table.Cell>
      </Table.Row>      
    )

   const tableBody = this.props.data.map(data =>(
        <Table.Row key = {data.id}>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.userId}</Table.Cell>
            <Table.Cell>{data.title}</Table.Cell>
            <Table.Cell>{data.body}</Table.Cell>
        </Table.Row>)
   );

   const result = this.props.loading ? loading:tableBody
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
        <Table celled className="ui unstackable striped table segment">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell name = 'id' onClick = {()=> this.onSort('id') }>Id</Table.HeaderCell>
              <Table.HeaderCell name = 'userid' onClick = {()=> this.onSort('userId') }>userId</Table.HeaderCell>
              <Table.HeaderCell name = 'title' onClick = {()=> this.onSort('title') }>Title</Table.HeaderCell>
              <Table.HeaderCell name = 'body' onClick = {()=> this.onSort('body') }>Body</Table.HeaderCell>
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

export default connect(null,mapDispatchToProps)(TableContent)
