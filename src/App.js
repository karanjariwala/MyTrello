    import React, {
        Component
    } from 'react';
    import {
        Board
    } from 'react-trello';




    const data = {
        lanes: [{
            id: 'lane1',
            title: 'Planned Tasks',
            cards: [{
                    id: 'Card1',
                    title:'test1',
                    desc:'test_desc',
                    assignee:'john doe',
                    dueOn:'date',
                    label:['imp'],
                    comments:[{comment:'test_comment',users:['kmh']}]
                },
                {
                    id: 'Card2',
                    title:'test2',
                    desc:'test222_desc',
                    assignee:'john222 doe',
                    dueOn:'date22',
                    label:['imp22'],
                    comments:[{comment:'test_comment222',users:['kmh22']}]
                    }
                
            ]
        }]
    }


const CustomCard = props => {
        return ( 
            <div>
                <header style = {{
                    borderBottom: '1px solid #eee',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: '#77777'
                                }}>
                    <div style = {{fontSize: 14,fontWeight: 'bold'}}> {props.assignee} </div>  
                    <div style = { {fontSize: 11 }} > {props.dueOn} </div>
                </header>
                    <div style = {{fontSize: 12,color: '#BD3B36'}} />
                    <div style = {{ color: '#4C4C4C',fontWeight: 'bold'}}> {props.title} </div> <div style = {{padding: '5px 0px'}} > < i > {props.desc} </i></div>
                    <div style = {{ marginTop: 10,textAlign: 'center',color: '#777777',fontSize: 15,fontWeight: 'bold'}} > {props.label[0]} </div> 
                    <div style = {{ marginTop: 10,textAlign: 'center',color: '#777777',fontSize: 15,fontWeight: 'bold'}} > {props.comments[0].comment} </div>
         
            </div>)
};

class App extends Component {
        render() {
            return ( <Board draggable customCardLayout data = { data } >
                <CustomCard / >
                </Board >)
            }
        }

export default App;