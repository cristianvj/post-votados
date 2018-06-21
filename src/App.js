import React, { Component } from 'react';
import {Grid, Row, Col, Media, Button} from 'react-bootstrap'
import AngleUp from 'react-icons/lib/fa/angle-up'
import AngleDown from 'react-icons/lib/fa/angle-down'
import posts from './posts'
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state={
      buttonAscendente: 'default',
      buttonDescendente: 'primary',
      posts: [],
    }
    
    this.handleLike = this.handleLike.bind(this)
    this.handleNotLike = this.handleNotLike.bind(this)
    this.handleOperation = this.handleOperation.bind(this)

  }

  componentWillMount(){
    let orderPosts = posts.sort(function (a, b) {
      return a.votes - b.votes;
    })
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
            <Button bsStyle={this.state.buttonAscendente}>Ascendente</Button>
            &nbsp;
            <Button bsStyle={this.state.buttonDescendente}>Descendente</Button>
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
                  <AngleUp value={index} className='text-primary' onClick={this.handleLike.bind(this, index)} />
                  <br/>
                  {post.votes}
                  <br/>
                  <AngleDown className='text-primary' onClick={this.handleNotLike.bind(this, index)} />
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
    );
  }

  handleLike(i){
    this.handleOperation(i,'sum')
  }
  handleNotLike(i){
    this.handleOperation(i,'res')
  }
  handleOperation(i,operation){
    let votes = ''
    if(operation==='sum'){
      votes = this.state.posts[i].votes + 1
    }else{
      votes = this.state.posts[i].votes - 1
    }
    let postsOrder = [
        ...posts.slice(0,i),
        {
          id: this.state.posts[i].id,
          title: this.state.posts[i].title,
          description: this.state.posts[i].description,
          url: this.state.posts[i].url,
          votes: votes,
          writer_avatar_url: this.state.posts[i].writer_avatar_url,
          post_image_url: this.state.posts[i].post_image_url,
        },
        ...posts.slice(i + 1)
      ]

    this.setState({
      posts: postsOrder.sort(function (a, b) {
              return a.votes - b.votes;
            })
    })
  }
}

export default App;
