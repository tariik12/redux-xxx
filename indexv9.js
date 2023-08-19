//async actions -api calling

const { default: axios } = require("axios")
const { createStore,applyMiddleware } = require("redux");
const thunk= require("redux-thunk").default;
//api url -https://jsonplacheolder.typicode.com/todos
// middleware- redux-thunk
//axios api

// constants
const GET_TODO_REQUEST="GET_TODO_REQUEST"
const GET_TODO_SUCCESS="GET_TODO_SUCCESS"
const GET_TODO_FAILED="GET_TODO_FAILED"
const API_URL = "./data.json"
//states

const initialTodoState ={
    todo:[],
    isLoading:false,
    error:null,
}
//actions

const getTodoRequest = () =>{
    return{
        type:  GET_TODO_REQUEST,
        
    };
}
const getTodoFailed = (error) =>{
    return{
        type:  GET_TODO_FAILED,
        payload:error
        
    };
};
const getTodoSuccess = (todo) =>{
    return{
        type:  GET_TODO_SUCCESS,
        payload:todo
    };
}
//reducers

const todoReducer =(state=initialTodoState,action) =>{
    switch (action.type) {
        case GET_TODO_REQUEST
        :
            return{
                ...state,
                isLoading:true,
            }
        case GET_TODO_SUCCESS
        :
            return{
                ...state,
                isLoading:false,
                todo:action.payload
            }
        case GET_TODO_FAILED
        :
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
           
        default:
            return state;
    }
}

// async action creator
const fetchData =()=>{
return(dispatch) =>{
    dispatch(getTodoRequest());
    axios.get(API_URL)
    .then(res =>{
        const todo = (res.data)
        const name = todo.map(tod =>tod.name);
        console.log(name)
        dispatch(getTodoSuccess(titles))
    })
    .catch((error) =>{
        console.log(error.message)
        const errorMessage = error.message;
        dispatch(getTodoFailed(errorMessage))
    })
}
}
// TODO

//store

const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch
store.dispatch(fetchData())

