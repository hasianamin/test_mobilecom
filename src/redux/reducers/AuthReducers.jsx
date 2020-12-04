const INITIAL_STATE = {
    username:'',
    password:'',
    id:0,
    isLogin: false,
    isLoading:false,
    loginTime:0
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state, ...action.payload, isLogin:true, isLoading:false}
        case 'LOADING':
            return {...state,isLoading:true}    
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}