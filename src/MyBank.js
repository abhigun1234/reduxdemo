import React, { Component } from 'react';
import { createStore } from 'redux'
class MyBank extends Component {
   constructor(){

    super()
    this.addDeposit=this.addDeposit.bind(this)
   }
    defaultState = 0

    //
    myReducer = (state = this.defaultState,action) => {

        console.log("action",action)
        switch(action.type){
            case "Deposit":
                console.log('Deposit')
               return state=state+action.amount
            case "Withdrow":
               return state=state-action.amount
            
            
        }


    }

  addDeposit(){
      //create stote
    var store =createStore(this.myReducer)
    store.subscribe(()=>{
        console.log(store.getState())
    })
    // despach
     store.dispatch({type:"Deposit",amount:200})

     store.dispatch({type:"Deposit",amount:200})

     store.dispatch({type:"Deposit",amount:400})

     store.dispatch({type:"Deposit",amount:600})

     store.dispatch({type:"Withdrow",amount:500})

    // store.di

  }
    render() {
        return (
            <div>
             <button onClick={this.addDeposit}>deposit</button>
            </div>
        );
    }
}

export default MyBank;