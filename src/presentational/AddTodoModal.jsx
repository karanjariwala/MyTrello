import React, {Component} from 'react';
import {Modal,Button,Input, Dropdown, Form,Grid} from 'semantic-ui-react';

const AddTodoModal = props => {
    return ( 
        <Modal size={'small'} open={props.open} onClose={props.onClose}>
        <Modal.Content tex>
               <Form>
                    <Form.Group>
                         <Form.Input  onChange={props.handleChange}  name='title' label='Title' placeholder='Title' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input  onChange={props.handleChange}  name='desc' label='Description' placeholder='Description' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input   onChange={props.handleChange}  name='dueOn' label='Due In' placeholder='1 day' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select  onChange={props.handleChange}  label='Assignee'  name='assignee' placeholder='Assignee' selection options={props.users} />
                        <Form.Select  onChange={props.handleChange} label='Label'  name='label' placeholder='Label' selection options={props.lables} />
                    </Form.Group>
                   
                </Form>
                </Modal.Content>
                <Modal.Actions>
                <Button disabled={!props.isDisabled()}  fluid color="green" type="submit" onClick={props.onSave}>Submit</Button>
                </Modal.Actions>
     
        </Modal>)
};

export default AddTodoModal