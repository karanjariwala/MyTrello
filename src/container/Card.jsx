import React, {Component} from 'react';
import CardModal from '../presentational/CardModal';

class Card extends Component{
    state={
        card:this.props.selectedCard,
        newComment:'',
        tagUsers:[]
    }

    handleChange=(e)=>{
        this.setState({newComment:e.target.value});
    }

    handleTagChange=(e,data)=>{
        console.log(e.target,data);
        this.setState({tagUsers:data.value})
    }

    getTagString=()=>{
        if(this.state.tagUsers.length>0){
            return `--tags:@${this.state.tagUsers.join(' @')}`
        }
        return '';
        
    }

    save=()=>{
        const newCard=this.state.card;
        newCard.comments.push(`${this.state.newComment} ${this.getTagString()}`);
       this.setState({card:newCard, newComment:'', tagUsers:[]})
    }

    componentWillUnmount(){
        this.props.onSave(this.state.card);
    }

    render(){
            return <CardModal
                    open={this.props.open}
                    onClose={this.props.onClose}
                    selectedCard={this.props.selectedCard}
                    newComment={this.state.newComment}
                    handleChange={this.handleChange}
                    save={this.save} 
                    users={this.props.users}
                    tagUsers={this.state.tagUsers}
                    handleTagChange={this.handleTagChange}/>         
                }
            };

export default Card