import React from "react";
import "./../css/Creditos.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const Creditos = () => {
  return (
    <>
      <Container fluid className="mt-2 d-flex justify-content-center">
        <Row>
          <Col>
            <Col>
              <h1>Solicitud de creditos</h1>
            </Col>
            <Form>
              <Form.Text className="text-muted mb-3">
                Con la banca Virtual nunca fue tan facil pedir un credito
              </Form.Text>
              <Form.Group className="mb-3 celeste" controlId="formBasicEmail">
                <Form.Label>Monto a Desear</Form.Label>
                <Form.Control type="number" placeholder="S/. 1000.00" />
              </Form.Group>

              <Form.Group
                className="mb-3 celeste"
                controlId="formBasicPassword"
              >
                <Form.Label>Cuotas Provistas(meses)</Form.Label>
                <Form.Control type="number" placeholder="24" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Ver fecha de pago" />
              </Form.Group>

              <Col className="celeste text-center">
                <h5>Resumen</h5>
              </Col>

              <Form.Group
                className="mb-3 text-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Cuota T.E.A. 38%" />
              </Form.Group>
            </Form>

            <Col className="text-center">
              <h5 className="celeste mt-4 ">Valor de Cuota</h5>
              <h6>S/.604.13</h6>
            </Col>

            <Col className="text-center">
              <h5 className="celeste mt-4">Valor de Cuota de Interes</h5>
              <h6>S/.418.77</h6>
            </Col>
            <Col className="text-center">
              <Button variant="primary" type="submit" className="mt-4">
                SOLICITAR
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Creditos;
