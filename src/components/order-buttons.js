import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import store from '../store'

class OrderButtons extends Component{
  
  constructor(){
    super()
    this.state = {
      order: true
    }
      store.subscribe(() =>
        this.setState({
          order: store.getState().order
        })
      )
    this.handleOrder = this.handleOrder.bind(this)
  }

  render(){
    return(
      <div>
        <Button 
          bsStyle={(this.state.order)?"primary":"default"}
          onClick={()=>this.handleOrder(true)}              
        >
          Ascendente
        </Button>
        &nbsp;
        <Button 
          bsStyle={(this.state.order)?"default":"primary"}
          onClick={()=>this.handleOrder(false)}
        >
          Descendente
        </Button>
      </div>
    )
  }

  handleOrder(order){
    store.dispatch({
      type: 'CHANGE_ORDER',
      order
    })
  }

}

export default OrderButtons