
const data={
users:[{key:'KJ',value:'KJ',text:'KJ'},{key:'JD',value:'JD',text:'JD'},{key:'AB',value:'AB',text:'AB'},
{key:'CD',value:'CD',text:'CD'}],
lables:[{key:'Y',value:'Y',text:'Yellow'},{key:'R',value:'R',text:'RED'},{key:'G',value:'G',text:'Green'},
{key:'B',value:'B',text:'Blue'}],
boardData:{
    lanes: [{
            id: 'lane1',
            title: 'To Do',
            cards: [{
                    id: 'Card1',
                    title:'HomeWork',
                    desc:'Algebra',
                    assignee:'KJ',
                    dueOn:'25/10/17',
                    label:'yellow',
                    comments:[{comment:'test_comment',users:['AB']}]
                },
                {
                    id: 'Card2',
                    title:'gym',
                    desc:'pushup',
                    assignee:'JD',
                    dueOn:'30/10/17',
                    label:'red',
                    comments:[{comment:'test_comment12',users:['KJ']}]
                }]
        },
        {
            id: 'lane2',
            title: 'In Progress',
            cards: [{
                    id: 'Card1',
                    title:'HomeWork',
                    desc:'Algebra',
                    assignee:'KJ',
                    dueOn:'25/10/17',
                    label:'yellow',
                    comments:[{comment:'test_comment',users:['AB']}]
                },
                {
                    id: 'Card2',
                    title:'gym',
                    desc:'pushup',
                    assignee:'JD',
                    dueOn:'30/10/17',
                    label:'red',
                    comments:[{comment:'test_comment12',users:['KJ']}]
                }]
        },
        {
            id: 'lane3',
            title: 'On Hold',
            cards:[],
            },
            {
                id: 'lane4',
                title: 'Done',
                cards:[],
            }]
        }

}

export default data;