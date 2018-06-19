import React, { Component } from 'react';
import {Grid, Row, Col, Media} from 'react-bootstrap'
import './App.css';

class App extends Component {
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
          <Col md={8} mdOffset={2} >
            <Media>
                <Media.Left>
                  <img  width={84} src="https://qph.fs.quoracdn.net/main-qimg-1e5ff540af21f1445fb14aeaf5d7704c" alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Media Heading</Media.Heading>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={8} mdOffset={2} >
            <Media>
                <Media.Left>
                  <img  width={84} src="http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Media Heading</Media.Heading>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
