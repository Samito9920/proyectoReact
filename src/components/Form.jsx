import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from "react-bootstrap";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs
} from 'firebase/firestore';
import { db } from './firebase'




export default function form() {
  const useCollectionRef = collection(db, 'restaurante')
  const [reservacion, setReservacion] = useState([])
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    apellidos: "",
    correo: "",
    numeroPersonas: ""
  });


  const crearReserva = () => {
    if (form) {
      addDoc(collection(db, 'restaurante'), form)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const limpiarForm = (ev) => {
    ev.preventDefault();
    // Hacer algo con los datos del formulario
    setForm({
      nombre: "",
      cedula: "",
      telefono: "",
      apellidos: "",
      correo: "",
      numeroPersonas: ""
    });
  }
  useEffect(() => {


  }, []);

  return (
    <>

      <Form onSubmit={limpiarForm}>
        <h6 id="titulo">Registra tu reservación</h6>
        <div className="d-flex">
          <div className="col-sm m-2">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Nombre" name="nombre" value={form.nombre} onChange={handleChange} />
            <Form.Label>Cedula</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Apellido" name="cedula" value={form.cedula} onChange={handleChange} />
            <Form.Label>Número de Telefono</Form.Label>
            <Form.Control type="text" placeholder="Número de Telefono" name="telefono" value={form.telefono} onChange={handleChange} />
          </div>
          <div className="col-sm m-2">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Nombre" name="apellidos" value={form.apellidos} onChange={handleChange} />
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Email" name="correo" value={form.correo} onChange={handleChange} />
            <Form.Label>No. de Personas</Form.Label>
            <Form.Control type="text" placeholder="Número de Telefono" name="numeroPersonas" value={form.numeroPersonas} onChange={handleChange} />
          </div>
        </div>
        <Button variant="primary" onClick={() => crearReserva()} type="submit">
          Registrar
        </Button>
      </Form>

    </>
  )
}
