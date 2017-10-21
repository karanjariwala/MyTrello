import React, {Component} from 'react';
import {Modal,Button,Header,Feed} from 'semantic-ui-react';

class CardModal extends Component{
    state={
        card:this.props.selectedCard
    }


    render(){

        return (
            <Modal size={'small'} open={this.props.open} onClose={this.props.onClose}>
                    <Modal.Content style={{textAlign:'left'}}>
                    <Header as='h2'>
                    {this.props.selectedCard.title}
                    <Header.Subheader>
                    <p><b>{this.props.selectedCard.desc} </b></p>
                    </Header.Subheader>
               
                  <Header.Subheader>
                  <p>  Assigned to <b> {this.props.selectedCard.assignee} </b></p>
                  </Header.Subheader>
                  <Header.Subheader>
                 <p>  Due on <b> {this.props.selectedCard.dueOn}</b></p>
                 </Header.Subheader>
                 <Header.Subheader>
                   <p> Label <b> {this.props.selectedCard.label} </b></p>
                   </Header.Subheader>
              
          

                  </Header>

                 
                  <Header as='h4'>Comments</Header>
                    {this.props.selectedCard.comments.length>0&&
                        this.props.selectedCard.comments.map((comm)=>{
                            <p>comm</p>
                        })}
            
              
         
                  



                    </Modal.Content>
                    <Modal.Actions>
                    <Button   fluid color="green" type="submit" onClick={this.props.onClose}>Close</Button>
                    </Modal.Actions>
         
            </Modal>
        )
}

    
};

export default CardModal