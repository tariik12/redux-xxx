// state - count:0;
//action - increment, decrement, reset
//reducer
//store

const { createStore } = require("redux")

//CONSTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

const  ADD_USER_BY = "ADD_USER_BY"

const initialState = {
    users:["anis"],
    count:1
}
// const initialUserState = {
    
//     count:1
// }
const addUserAction =(user)=>{
    return{
        type:ADD_USER_BY,
        payload:user
    }
}
const incrementCounterAction =()=>{
    return{
        type:INCREMENT,
    }
}
const decrementCounterAction =()=>{
    return{
        type:DECREMENT,
    }
}
const resetCounterAction =()=>{
    return{
        type:RESET,
    }
}
const incrementCounterByValue =(value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}


//CREATE REDUCER

const counterReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_USER_BY:
            return{
                users:[...state.users, action.payload],
                count: state.count + 1
            }
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        case RESET:
            return{
                ...state,
                count: 0
            }
     
            default:
                state;

    }
}


//store
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addUserAction('tarik'))
store.dispatch(addUserAction('shamim'))
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterByValue(100))