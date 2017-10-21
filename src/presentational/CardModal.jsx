import React, {Component} from 'react';
import {Modal,Button,Header,Feed, Input, Dropdown} from 'semantic-ui-react';

const CardModal = props => {
    return ( 
        <Modal size={'small'} open={props.open} onClose={props.onClose}>
        <Modal.Content style={{textAlign:'left'}}>
                <Header as='h2'>
                        {props.selectedCard.title}
                <Header.Subheader>
                        <p><b>{props.selectedCard.desc} </b></p>
                </Header.Subheader>
                <Header.Subheader>
                        <p>  Assigned to <b> {props.selectedCard.assignee} </b></p>
                </Header.Subheader>
                <Header.Subheader>
                        <p>  Due on <b> {props.selectedCard.dueOn}</b></p>
                </Header.Subheader>
                <Header.Subheader>
                        <p> Label <b style={{color:props.selectedCard.label}}> {props.selectedCard.label} </b></p>
                </Header.Subheader>
                 </Header>
             {props.selectedCard.comments.length>0&&(<Feed size='small'>
                <Header as='h4'>Comments</Header>
                {props.selectedCard.comments.map((comm,i)=>(<Feed.Event key={i}>
                    <Feed.Content>
                    <Feed.Summary>
                    {comm}
                    </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>))}
            </Feed>)}
             <Input value={props.newComment} placeholder='Add comment' onChange={props.handleChange}/>
             <Dropdown value={props.tagUsers} onChange={props.handleTagChange} placeholder='Tag Multiple Users'  multiple selection options={props.users} />
        </Modal.Content>
        <Modal.Actions>
        <Button disabled={props.newComment===''}   color="green"  onClick={props.save}>Add Comment</Button>
        
        <Button    color="red"  onClick={props.onClose}>Close</Button>
        </Modal.Actions>

</Modal>)
};

export default CardModal;