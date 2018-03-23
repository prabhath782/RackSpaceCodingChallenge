//importing components
import React from 'react'
import {Table,Loader,Dimmer,Image} from 'semantic-ui-react'

// functional component will loaded when fetching data and return jsx elements
const loading = ()=>{
    return(
        
        <Table.Row>
               <Table.Cell>
                <Dimmer active inverted>
                 <Loader size='massive' />
                </Dimmer>
                 <Image  className = 'img'src="https://semantic-ui.com/images/wireframe/short-paragraph.png"/>
               </Table.Cell>
        </Table.Row> 
        )
}

//exporting component
export default loading
