import React, {Component} from 'react';
import {Modal,Button,Input, Dropdown, Form,Grid} from 'semantic-ui-react';

class AddTodo extends Component{
    state={
        id: '',
        title:'',
        desc:'',
        assignee:'',
        dueOn:'',
        label:'',
        comments:[]
    }


    handleChange = (e, { name, value }) => {
        console.log(this.state)
        this.setState({ [name]: value });
    }

    onSave=()=>{
        this.setState({id:Date.now().toString()},()=>{
          
            this.props.onSave(this.state);
            this.props.onClose();

        })
      
    }


    render(){

        return (
            <Modal size={'small'} open={this.props.open} onClose={this.props.onClose}>
            <Modal.Content tex>
                   <Form>
                        <Form.Group>
                        <Form.Input  onChange={this.handleChange}  name='title' label='Title' placeholder='Title' />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input  onChange={this.handleChange}  name='desc' label='Description' placeholder='Description' />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input   onChange={this.handleChange}  name='Due On' label='dueOn' placeholder='1 day' />
                        </Form.Group>
                        <Form.Group>
                        <Form.Select  onChange={this.handleChange}  label='Assignee'  name='assignee' placeholder='Assignee' selection options={this.props.users} />
                        <Form.Select  onChange={this.handleChange} label='Label'  name='label' placeholder='Label' selection options={this.props.lables} />
                        </Form.Group>
                       
                    </Form>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button type="submit" onClick={this.onSave}>Submit</Button>
                    </Modal.Actions>
         
            </Modal>
        )
}

    
};

export default AddTodo