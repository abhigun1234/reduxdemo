import React from 'react';
import {createStore} from "redux"
function Cart(props) {
    var defaultState=0;
    var cartVal=0;
    const cartReducer=(state=defaultState,action)=>{
        console.log('reducer invoked',action )
        switch(action.type){

            case "Add_to_Cart":
                return state+1
            case "delete_to_Cart":
                return state-1
            default:
                return state
        }
    }
    var store=createStore(cartReducer)
    console.log("store.getstate",store.getState())
    //dispatch
    store.dispatch({type:"Add_to_Cart"})
    console.log("store.getstate",store.getState())
    store.dispatch({type:"Add_to_Cart"})
    console.log("store.getstate",store.getState())
    
    store.dispatch({type:"delete_to_Cart"})
    console.log("store.getstate",store.getState())
    cartVal=store.getState()
    return (
        <div>
            {cartVal}
        </div>
    );
}

export default Cart;