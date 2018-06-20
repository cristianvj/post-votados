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
      buttonOrder: 'primary',
      posts: posts,
    }
    this.handleLike = this.handleLike.bind(this)
    this.handleNotLike = this.handleNotLike.bind(this)
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
            <h4>Orden:</h4> <Button>Ascendente</Button> <Button bsStyle={this.state.buttonOrder}>Descendente</Button>
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
                  <AngleUp className='text-primary' onClick={this.handleLike} />
                  <br/>
                  {post.votes}
                  <br/>
                  <AngleDown className='text-primary' onClick={this.handleNotLike} />
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

  handleLike(){
    this.setState({
      posts: [
        ...posts.slice(0,1),
        {
          id: this.state.posts[1].id,
          title: this.state.posts[1].title,
          description: this.state.posts[1].description,
          url: this.state.posts[1].url,
          votes: this.state.posts[1].votes + 1,
          writer_avatar_url: this.state.posts[1].writer_avatar_url,
          post_image_url: this.state.posts[1].post_image_url,
        }
        ,
        ...posts.slice(1 + 1)
      ]
    })
  }
  handleNotLike(){
    this.setState({
      posts: [
        ...posts.slice(0,1),
        {
          id: this.state.posts[1].id,
          title: this.state.posts[1].title,
          description: this.state.posts[1].description,
          url: this.state.posts[1].url,
          votes: this.state.posts[1].votes - 1,
          writer_avatar_url: this.state.posts[1].writer_avatar_url,
          post_image_url: this.state.posts[1].post_image_url,
        }
        ,
        ...posts.slice(1 + 1)
      ]
    })
  }
}

export default App;
