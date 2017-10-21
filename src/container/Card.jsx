import React, {Component} from 'react';
import CardModal from '../presentational/CardModal';

class Card extends Component{
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
            return <CardModal
                    open={this.props.open}
                    onClose={this.props.onClose}
                    selectedCard={this.props.selectedCard}
                    newComment={this.state.newComment}
                    handleChange={this.handleChange}
                    save={this.save} />         
                }
            };

export default Card