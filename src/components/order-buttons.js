import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import store from '../store'

class OrderButtons extends Component{
  constructor(props){
    super(props)
    this.state = {
      order: props.order
    }
      console.log('estado desde props: '+ props.order)
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
    //let order = true
    //let posts = this.state.posts

    //if(!str){
     //order = false
     //posts = this.order(posts,false)
     //console.log('devuelve: '+posts)
    //}else{
     //posts = this.order(posts,true)
    //}

    /*this.setState({
     order,
     posts
    })*/

    /*this.setState({
      order
    })*/

    console.log('despachando: '+order)
    store.dispatch({
      type: 'CHANGE_ORDER',
      order
    })

  }

}

export default OrderButtons