import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import restaurantedentro from '../assets/restaurantedentro.jpeg';


export default function form() {
  return (
    <>
     
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" name='Nombre' />
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" name='Apellido' />
          <Form.Label>Cedula</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" name='Cedula' />
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Email" name='Email' />
          <Form.Label>Número de Telefono</Form.Label>
          <Form.Control type="text" placeholder="Número de Telefono" name='telefono' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  )
}