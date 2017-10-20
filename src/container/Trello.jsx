import React, {Component} from 'react';
import { Board} from 'react-trello';
import update from 'immutability-helper';
import CustomCard from '../presentational/CustomCard';
import api from '../Sevices/api.js';
import data from '../Sevices/dataService.js';



class Trello extends Component {

    state={
        users:[],
        boardData:{
            lanes:[{id:'1',title:'',cards:[]} ]
        },
        eventBus:undefined,
    }

    componentWillMount(){
        api.get('data').then((data)=>{
            this.setState({users:data.users,boardData:data.boardData})
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


    render() {
        return ( 
            <Board  draggable onDataChange={(newData)=>this.onDataChange(newData)} eventBusHandle={this.setEventBus} customCardLayout data = { this.state.boardData } >
                <CustomCard / >
            </Board >)
        }
    }

export default Trello;