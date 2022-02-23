import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalCentered(props) {

    const formatValue = (value)=>{
        return Number(value).toFixed(2).replace('.', ',');
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Resultado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Valor da refeição: R${ formatValue(props.amount) }</p>
          <p>Porcentagem de gorjeta: { props.tip }%</p>
          <p>Valor da gorjeta: R${ formatValue((props.amount * props.tip) / 100) }</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Voltar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default function Result({amount, tip}) {

    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)} disabled={!(amount && Number(amount) > 0)}>Calcular</Button>
  
        <ModalCentered
          show={modalShow}
          onHide={() => setModalShow(false)}
          amount={amount}
          tip={tip}
        />
      </>
    );
}