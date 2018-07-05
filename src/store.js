import { createStore } from 'redux'

const reducer = (state, action)=>{
  if(action.type === 'CHANGE_ORDER'){
    return{
      ...state,
      order: action.order
    }
  }
  return state
}

export default createStore(reducer, {order: true})