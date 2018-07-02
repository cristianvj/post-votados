import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import store from './store'

class OrderButtons extends Component{

  constructor(){
    super()
    this.state={
      order: true,
      posts: [],
    }

    this.handleOrder = this.handleOrder.bind(this)
    this.order = this.order.bind(this)

  }


  render(){
    return(
      <div>
        <h4>Orden:</h4> 
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

  handleOrder(getOrder){
    let order = true
    let posts = this.state.posts
    if(!getOrder){
      order = false
      posts = this.order(posts,false)
    }else{
      posts = this.order(posts,true)
    }

    store.dispatch({
      type: "HANDLE_ORDER",
      order: order
    })
  }

  order(posts, ope){
    return(
      posts.sort(function (a, b) {
        if(!ope){
          return b.votes - a.votes
        }else{
          return a.votes - b.votes
        }
      })
    )
  }

}

export default OrderButtons