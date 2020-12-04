const INITIAL_STATE = [
    {
        id:0,
        username:'Susan Doe',
        password:'susan',
        dob:'2020-9-12',
        bio:'testest',
        address:'asdasd',
        gender:'Woman',
        lastEdu:'S1'
    },
    {
        id:1,
        username:'Amy Blyth',
        password:'amy',
        dob:'2020-10-12',
        bio:'testest',
        address:'asdasd',
        gender:'Man',
        lastEdu:'S2'
    },
    {
        id:2,
        username:'Jane Doe',
        password:'jane',
        dob:'2020-12-12',
        bio:'testest',
        address:'asdasd',
        gender:'Man',
        lastEdu:'S1'
    },
    {
        id:3,
        username:'Jane Doe',
        password:'793e219615099afb85ee0560806b18404bf68d9a5f773e21511ae04b30787e5f',
        email: 'Jane@gmail.com',
        dob:'',
        bio:'',
        address:'',
        gender:'',
        lastEdu:''
    },
]


export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'UPDATE':
            state[action.payload.id]= action.payload
            return state
        default:
            return state
    }
}