import { ADD_TO_CART } from "../Constants";

const intialState={cartData=[]}
export default function cartItems(state = intialState,action){
    switch(action,type){

         case ADD_TO_CART (action.type):
             return{
                 ...state,
                    cartData:action.data
             }

    }
}

// defoultState=0
// export default function  balenceReducer = (state = intialState, action) => {
//     console.log('reducer invoked',action)
//     switch (action.type) {
//         case "DEPOSIT":
//             return state + action.amount;
//         case "WITHDROW":
//             return state - action.amount;

//     }
// }