import React, { Component } from 'react'
import {Grid, Row, Col, Media} from 'react-bootstrap'
import AngleUp from 'react-icons/lib/fa/angle-up'
import AngleDown from 'react-icons/lib/fa/angle-down'
import OrderButtons from './components/order-buttons'
import store from './store'
import posts from './posts'
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state={
      order: true,
      posts: [],
    }
    
    this.handleLike = this.handleLike.bind(this)
    this.handleNotLike = this.handleNotLike.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.order = this.order.bind(this)

  }

  
    componentWillMount(){
      console.log('store: '+store.getState().order)
      console.log('state: '+this.state.order)
      let orderPosts = this.order(posts,true)
      this.setState({
        posts: orderPosts
      })
    }
  

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
              <br/>
              <h1 className="text-muted text-center">Blog Post Más Populares</h1>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col md={6} mdOffset={2}>
            <h4>Orden:</h4> 
            <OrderButtons order={this.state.order}/>
          </Col>
        </Row>
        <br/>
        {
          this.state.posts.map((post, index)=>{
            return(

              <Row key={index}>
                <br/>
                <Col xs={2} mdOffset={1} >
                  <Media>
                    <Media.Left>
                      <img className='text-center' width={160} height={100} src={post.post_image_url} alt="thumbnail" />
                    </Media.Left>
                  </Media>
                </Col>
                <Col xs={1}>
                  <h4 className='text-center'> 
                  <AngleUp value={index} className='text-primary' onClick={()=>this.handleLike(index)} />
                  <br/>
                  {post.votes}
                  <br/>
                  <AngleDown className='text-primary' onClick={()=>this.handleNotLike(index)} />
                  </h4>
                </Col>
                <Col xs={7}>      
                  <Media>
                    <Media.Body>
                      <Media.Heading>{post.title}</Media.Heading>
                      <p>{post.description}</p>
                    </Media.Body>
                  </Media>
                </Col>
              </Row>
            )
          })
        }
      </Grid>
    )
  }

  handleLike(i){
    this.handleOperation(i,false)
  }

  handleNotLike(i){
    this.handleOperation(i,true)
  }

  handleOperation(i,operation){

    let tmpPosts = this.state.posts
    let orderPosts = ''

    if(!operation){
      tmpPosts[i].votes = tmpPosts[i].votes + 1;
    }else{
      tmpPosts[i].votes = tmpPosts[i].votes - 1;
    }

    if(this.state.order){
      this.order(posts,true)
    }else{
      this.order(posts,false)
    }

    this.setState({
     posts: tmpPosts
    })

  }

   handleOrder(str){
    let order = true
    let posts = this.state.posts

    if(!str){
      order = false
      posts = this.order(posts,false)
      console.log('devuelve: '+posts)
    }else{
      posts = this.order(posts,true)
    }

    this.setState({
      order,
      posts
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

export default App;
