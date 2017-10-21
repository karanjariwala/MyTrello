import React, {Component} from 'react';
import {Modal,Button,Header,Feed, Input} from 'semantic-ui-react';

class CardModal extends Component{
    state={
        card:this.props.selectedCard,
        newComment:''
    }

    handleChange=(e)=>{
        this.setState({newComment:e.target.value});
    }

    save=()=>{
        const newCard=this.state.card;
        newCard.comments.push(this.state.newComment);
       this.setState({card:newCard, newComment:''})
    }

    componentWillUnmount(){
        this.props.onSave(this.state.card);
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

                 

                  {this.props.selectedCard.comments.length>0&&(<Feed size='small'>
                  <Header as='h4'>Comments</Header>
              
                  {this.props.selectedCard.comments.map((comm,i)=>(<Feed.Event key={i}>
                    <Feed.Content>
                      <Feed.Summary>
                      {comm}
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>))}
              </Feed>)}


              <Input value={this.state.newComment} onChange={this.handleChange}/>

                 

            
              
         
                  



                    </Modal.Content>
                    <Modal.Actions>
                    <Button disabled={this.state.newComment===''}   color="green"  onClick={this.save}>Add Comment</Button>
                    
                    <Button    color="red"  onClick={this.props.onClose}>Close</Button>
                    </Modal.Actions>
         
            </Modal>
        )
}

    
};

export default CardModal