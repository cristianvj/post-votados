import { createStore } from 'redux'

const reducer = (state, action)=>{
  if(action.type === 'CHANGE_ORDER'){
    //implementar la funcionalidad de cambio de estado, luego este estado
    //lo llamamos desde app.js para actualizar las props que se envian a order-buttons
    console.log('llega al store: '+action.order)
    return{
      order: action.order
    }
  }
  return state
}

export default createStore(reducer, {order: false})