//products constants

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS" 
const ADD_PRODUCTS = "ADD_PRODUCTS"


// product state
const initialProductState ={
    products:["sugar","salt"],
    numberOfProducts:2,
}


//product action
const getProducts =() =>{
    return{
        type:GET_PRODUCTS,
    };
}
const addProducts =(product) =>{
    return{
        type:ADD_PRODUCTS,
        payload:product,
    };
}


//productReducer
const productReducer = (state=initialProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            
           return{
            ...state,
           };
        case ADD_PRODUCTS:
            
           return{
            products:[...state.products, action.payload],
            numberOfProducts:state.numberOfProducts + 1,
           }

    
        default:
           return state;
    }
}


//store
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(() =>{
    console.log(store.getState());
})
//dispatch
store.dispatch(getProducts())
store.dispatch(addProducts('pen'))