import React, {Component} from 'react';
import AddTodoModal from '../presentational/AddTodoModal';

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

    isDisabled=()=>{
        console.log(this.state,this.state.assignee!=='',this.state.label!=='',this.state.desc!=='',this.state.dueOn!=='',this.state.title!=='')
        return this.state.assignee!==''&&this.state.label!==''&&this.state.desc!==''&&this.state.dueOn!==''&&this.state.title!==''
    }
    


    render(){

        return <AddTodoModal open={this.props.open} 
            onClose={this.props.onClose} 
            handleChange={this.handleChange}
            users={this.props.users}
            lables={this.props.lables} 
            isDisabled={this.isDisabled}
            onSave={this.onSave} />
            
        }

    
};

export default AddTodo