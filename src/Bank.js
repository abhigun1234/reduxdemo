import { act } from '@testing-library/react';
import React, { Component } from 'react';
import { createStore } from 'redux'
class Bank extends Component {
    constructor(){

        super()
        this.addBalance=this.addBalance.bind(this)
        this.balenceReducer=this.balenceReducer.bind(this)
    }
    defoultState=0
    balenceReducer = (state = this.defoultState, action) => {
        console.log('reducer invoked',action)
        switch (action.type) {
            case "DEPOSIT":
                return state + action.amount;
            case "WITHDROW":
                return state - action.amount;

        }
    }
    // addBalance() {
    //     var store =createStore(this.balenceReducer)
    //     store.subscribe(()=>{
    //         console.log(store.getState())
    //     })
    //    // console.log(store.getState())
    //     store.dispatch({type:'DEPOSIT'})
    //    // console.log(store.getState())
    //     store.dispatch({type:'DEPOSIT'})
    //     //console.log(store.getState())
    //     store.dispatch({type:'WITHDROW'})
    //   //  console.log(store.getState())
        

    // }
        addBalance() {
        var store =createStore(this.balenceReducer)
        store.subscribe(()=>{
            console.log(store.getState())
        })
       // console.log(store.getState())
        store.dispatch({type:'DEPOSIT',amount:200})
       // console.log(store.getState())
        store.dispatch({type:'DEPOSIT',amount:300})
        //console.log(store.getState())
        store.dispatch({type:'WITHDROW',amount:400})
      //  console.log(store.getState())
        

    }
    render() {
        return (
            <div>
                hello
                <button onClick={this.addBalance}>add</button>
            </div>
        );
    }
}

export default Bank;