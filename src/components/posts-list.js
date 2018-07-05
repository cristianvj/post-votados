import React, {Component} from 'react'
import {Row, Col, Media} from 'react-bootstrap'
import AngleUp from 'react-icons/lib/fa/angle-up'
import AngleDown from 'react-icons/lib/fa/angle-down'
import posts from '../posts'
import store from '../store'

class PostsList extends Component{
  constructor(){
    super()
    this.state={
      order: true,
      posts: []
    }

    this.handleLike = this.handleLike.bind(this)
    this.handleNotLike = this.handleNotLike.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.order = this.order.bind(this)

    store.subscribe(() =>
      this.setState({
        order: store.getState().order,
        posts: this.order(posts, store.getState().order)
      })
    )

  }

  componentWillMount(){
    this.setState({
      posts: this.order(posts,true)
    })
  }

  render(){
    return(
      <div>
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
      </div>
    )
  }

  handleLike(i){
    this.handleOperation(i,true)
  }

  handleNotLike(i){
    this.handleOperation(i,false)
  }

  handleOperation(i,operation){

    let tmpPosts = this.state.posts

    if(operation){
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

  order(posts, ope){
    return(
      posts.sort(function (a, b) {
        if(ope){
          return a.votes - b.votes
        }else{
          return b.votes - a.votes
        }
      })
    )
  }

}

export default PostsList