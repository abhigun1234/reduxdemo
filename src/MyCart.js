import React from 'react';
import {createStore} from "redux"
function MyCart(props) {
    var defaulStateCart=0;
    var cartData=0;
    //reducer
    const cartReducer=(state=defaulStateCart,action)=>{
         console.log("reducer executed",action)
        switch (action.type){

            case "Add_To_Cart":
              return state=state+1
            case "Delete_To_Cart":
              return state=state-1
            default:
                return state


        }
        

    }
    //store
    var store=createStore(cartReducer)
   //despatch
   console.log("store.getstate",store.getState())
    //dispatch
    store.dispatch({type:"Add_To_Cart"})
    console.log("store.getstate",store.getState())
    store.dispatch({type:"Add_To_Cart"})
    console.log("store.getstate",store.getState())
    store.dispatch({type:"Delete_To_Cart"})
    console.log("store.getstate",store.getState())
    cartData=store.getState()
    return (
        <div>
           {cartData} 
        </div>
    );
}

export default MyCart;