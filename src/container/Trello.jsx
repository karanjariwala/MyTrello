import React, {Component} from 'react';
import { Board} from 'react-trello';
import update from 'immutability-helper';
import CustomCard from '../presentational/CustomCard';
import api from '../Sevices/api.js';
import data from '../Sevices/dataService.js';
import {Button, Modal} from 'semantic-ui-react';
import AddTodo from './AddTodo';


class Trello extends Component {

    state={
        users:[],
        lables:[],
        boardData:{
            lanes:[{id:'1',title:'',cards:[]} ]
        },
        open:false,
        eventBus:undefined,
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


    render() {
        return ( 
            <div>
            {this.state.open&&<AddTodo users={this.state.users} lables={this.state.lables} onClose={this.onClose} open onSave={this.onSave} />}          
                <div>
            <Button fluid color="red" onClick={this.onTodoClick} > Add Todo</Button>
                <Board  handleDragEnd={(cardId, sourceLaneId, targetLaneId)=>this.handleDragEnd(cardId, sourceLaneId, targetLaneId)} draggable onDataChange={this.onDataChange} eventBusHandle={this.setEventBus} customCardLayout data = { this.state.boardData } >
            <CustomCard / >
            </Board >
        </div>
        </div>)
        }
    }

export default Trello;