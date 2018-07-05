import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import OrderButtons from './components/order-buttons'
import PostsList from './components/posts-list'


let App = ()=>{
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
            <OrderButtons/>
          </Col>
        </Row>
        <br/>
        <PostsList/>
      </Grid>
    )
}

export default App
