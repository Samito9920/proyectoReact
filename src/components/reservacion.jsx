import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Table } from "react-bootstrap";
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
import { useState, useEffect } from "react";
import { BsFillTrashFill } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import { Modal, Container, Row, Col } from "react-bootstrap";


export default function reservacion() {
    const useCollectionRef = collection(db, 'restaurante')
    const [reservacion, setReservacion] = useState([])
    const [form, setForm] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [datos, setDatos] = useState([]);

    const getDatos =() => {
        const arrData = [];

        onSnapshot(collection(db, 'restaurante'), (snapshot) => {
            snapshot.docs.forEach((item) => {
                console.log('FIREBASE:', item.data())

                arrData.push({
                    ...item.data(),
                    id: item.id
                })

                //console.log(arrData);
                setReservacion(arrData);
            })
        })
    }
    const onDelete = async (id) => {
        console.log(id)
        await deleteDoc(doc(db, 'restaurante', id))
       getDatos()
    }

    const mostrarModal = (item) => {
        setModalShow(true);
        pasarDatos(item)
    }

    const pasarDatos = (item) => {
        setDatos(item)
    }
    useEffect(() => {
        getDatos()

    }, []);
    return (
        <>
            <Header />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cedula</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>No.Personas</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {reservacion.length > 0 && reservacion.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.cedula}</td>
                            <td>{item.correo}</td>
                            <td>{item.telefono}</td>
                            <td>{item.numero_personas}</td>
                            <td><Button onClick={() => onDelete(item.id)}>
                                <BsFillTrashFill />Eliminar</Button></td>
                            <td><Button onClick={() => mostrarModal(item)}>
                                <GrUpdate />Editar</Button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
            <UpdateReserva show={modalShow} onHide={() => setModalShow(false)} reservacion={datos} />
            <Footer />

        </>
    )
}

function UpdateReserva({ show, onHide, reservacion, props }) {
    const [form, setForm] = useState(reservacion);
    const[mostras, setmostrar]= useState(show)


    const onUpdate = async (form) => {
        if(form){
        console.log(reservacion)
        const newFields = {
            nombre: form.nombre,
            apellido: form.apellido,
            telefono: form.telefono,
            numero_personas: form.numero_personas,
            cedula: reservacion.cedula,
            correo: reservacion.correo
        };
        await updateDoc(doc(db, 'restaurante', reservacion.id), newFields);
        onHide(false);
        }

    };
    return (
        <Modal show={show} onHide={()=>onHide(false)} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Editar la Reservación</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={form.nombre}
                                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={form.apellido}
                                onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="text"
                                id="telefono"
                                name="telefono"
                                value={form.telefono}
                                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="numero_personas">No. de Personas:</label>
                            <input
                                type="number"
                                id="numero_personas"
                                name="numero_personas"
                                value={form.numero_personas}
                                onChange={(e) => setForm({ ...form, numero_personas: e.target.value })}
                            />
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onUpdate(form)}>Actualizar</Button>
            </Modal.Footer>
        </Modal>
    )
}