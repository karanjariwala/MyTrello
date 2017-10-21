
const data={
users:[{key:'KJ',value:'KJ',text:'KJ'},{key:'JD',value:'JD',text:'JD'},{key:'AB',value:'AB',text:'AB'},
{key:'CD',value:'CD',text:'CD'}],
lables:[{key:'O',value:'Orange',text:'Orange'},{key:'R',value:'Red',text:'Red'},{key:'G',value:'Green',text:'Green'},
{key:'B',value:'Blue',text:'Blue'}],
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
                    label:'Orange',
                    comments:['test_comment1']
                },
                {
                    id: 'Card2',
                    title:'Gym',
                    desc:'Push-ups',
                    assignee:'JD',
                    dueOn:'30/10/17',
                    label:'Red',
                    comments:['test_comment2']
                }]
        },
        {
            id: 'lane2',
            title: 'In Progress',
            cards: [{
                    id: 'Card3',
                    title:'Work',
                    desc:'JS',
                    assignee:'KJ',
                    dueOn:'25/10/17',
                    label:'Orange',
                    comments:['test_comment3']
                },
                {
                    id: 'Card4',
                    title:'Optimizations',
                    desc:'Webpack',
                    assignee:'JD',
                    dueOn:'30/10/17',
                    label:'Red',
                    comments:['test_comment4']
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