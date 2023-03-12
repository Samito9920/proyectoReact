import React from "react";
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from "react-bootstrap";



export default function form() {
 

  return (
    <>

      <Form>
        
          <h6 id="titulo">Registra tu reservación</h6>
          <div className="d-flex">
          <div class="col-sm m-2">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" name='Nombre' />
          <Form.Label>Cedula</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" name='Cedula' />
          <Form.Label>Número de Telefono</Form.Label>
          <Form.Control type="text" placeholder="Número de Telefono" name='telefono' />
          </div>
          <div class="col-sm m-2">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" name='Apellido' />
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Email" name='Email' />
          <Form.Label>No. de Personas</Form.Label>
          <Form.Control type="text" placeholder="Número de Telefono" name='telefono' />

          </div>
          </div>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  )
}