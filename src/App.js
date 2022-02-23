import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Components/Result';

function App() {

  const [amount, setAmount] = useState('');
  const [tip, setTip] = useState(10);

  return (
    <div className="App">
      <div className="content-center">
        <div className='centered-vertical'>
          <img src={ logo } />
        </div>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Valor</Form.Label>
                  <Form.Control value={amount} type="number" onChange={e=>setAmount(e.target.value)} placeholder="Digite o valor da refeição" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Row>
                    <Col className='col-9'>
                      <Form.Range value={tip} onChange={e=>setTip(e.target.value)} min={0} max={100} step={5} />
                    </Col>
                    <Col className='col-3'>
                      {`${tip}%`}
                    </Col>
                  </Row>
                </Form.Group>
                <Result amount={amount} tip={tip} />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
