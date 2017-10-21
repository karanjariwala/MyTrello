import React, {Component} from 'react';
import { Board} from 'react-trello';
import update from 'immutability-helper';
import CustomCard from '../presentational/CustomCard';
import api from '../Sevices/api.js';
import data from '../Sevices/dataService.js';
import {Button, Modal} from 'semantic-ui-react';
import AddTodo from './AddTodo';
import CardModal from './CardModal'


class Trello extends Component {

    state={
        users:[],
        lables:[],
        boardData:{
            lanes:[{id:'1',title:'',cards:[]} ]
        },
        open:false,
        eventBus:undefined,
        selectedCard:'',
        openCardModal:false,
    }

    componentWillMount(){
       if(!api.check('data')){
           console.log('here');
           api.save('data',data)
       }
        api.get('data').then((d)=>{
            this.setState({users:d.users,boardData:d.boardData, lables:d.lables})
        })

    }

    findLaneIndex = (id)=>this.state.boardData.lanes.findIndex((x)=>x.id===id);
    findCardIndex = (lInd,id) => this.state.boardData.lanes[lInd].cards.findIndex((x)=>x.id===id);

    setEventBus = handle => {
		this.state.eventBus = handle
	}

     onDataChange=(newData)=>{
        console.log('here', newData);
        this.setState({boardData:newData},()=>api.save(this.state))
    }

    handleDragEnd=(cardId, sourceLaneId, targetLaneId)=>{
        console.log('here',cardId, sourceLaneId, targetLaneId)

        const curLaneIndex=this.findLaneIndex(sourceLaneId);
        const targetLaneIndex=this.findLaneIndex(targetLaneId);
        const curCardIndex=this.findCardIndex(curLaneIndex,cardId)
        const curCard=this.state.boardData.lanes[curLaneIndex].cards[curCardIndex];
        let newState=this.state;
        newState.boardData.lanes[curLaneIndex].cards.splice(curCardIndex,1)
        newState.boardData.lanes[targetLaneIndex].cards.push(curCard);
        this.setState(newState,()=>api.save('data',this.state)) 
        console.log(this.state.boardData)
    }

    onTodoClick =()=>{
  
        this.setState({open:true},()=>console.log('here',this.state.open));
    }

    onSave=(card)=>{
        console.log(card)
        const newstate=this.state;
        newstate.boardData.lanes[0].cards.push(card);
        this.setState(newstate,()=>{
            api.save('data',this.state)
            window.location.reload();
      
        });
       
    }

    // refreshCards = () => {
    //     this.state.eventBus.publish({
    //       type: 'REFRESH_BOARD',
    //       data:this.state.boardData
    //     })
    //   }
    

    onClose=()=>this.setState({open:false});

    onCardClick=(cardId)=>{
        let selectedCard={};
        this.state.boardData.lanes.map((lane)=>{
            lane.cards.map((card)=>{
                if(card.id===cardId){
                    selectedCard=card;
                }
            })
        })

        console.log(selectedCard)

        this.setState({selectedCard:selectedCard, openCardModal:true})

    }

    onCardClose=()=>{
        this.setState({openCardModal:false})
    }

    modifyCard =(modifiedCard)=>{
        const newLanes= this.state.boardData.lanes.map((lane)=>{
            lane.cards.map((card)=>{
                if(card.id===modifiedCard.id){
                    return modifiedCard;
                }
                return card;
            })
        })
        this.setState({boardData:{lanes:newLanes}})

    }


    render() {
        return ( 
            <div>
            {this.state.open&&<AddTodo users={this.state.users} lables={this.state.lables} onClose={this.onClose} open onSave={this.onSave} />}          
             {this.state.openCardModal&&<CardModal users={this.state.users}   onClose={this.onCardClose} open selectedCard={this.state.selectedCard} onSave={this.modifyCard}/>}  
            <Button fluid color="red" onClick={this.onTodoClick} > Add Todo</Button>
            
            <Board onCardClick={this.onCardClick} handleDragEnd={(cardId, sourceLaneId, targetLaneId)=>this.handleDragEnd(cardId, sourceLaneId, targetLaneId)} draggable onDataChange={this.onDataChange} eventBusHandle={this.setEventBus} customCardLayout data = { this.state.boardData } >
            <CustomCard / >
            </Board >
 
        </div>)
        }
    }

export default Trello;