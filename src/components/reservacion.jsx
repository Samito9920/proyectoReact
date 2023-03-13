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
import {BsFillTrashFill} from 'react-icons/bs'
import {GrUpdate} from 'react-icons/gr'

export default function reservacion() {
    const useCollectionRef = collection(db, 'restaurante')
    const [reservacion, setReservacion] = useState([])
    const [form, setForm] = useState(null);


    const getDatos = async () => {
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
    const onDelete = async(id)=>{
        console.log(id)
        await deleteDoc(doc(db, 'restaurante', id))
        getDatos();
    }

    const onUpdate =async(reservacion)=>{
        
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
                    {reservacion.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.cedula}</td>
                            <td>{item.correo}</td>
                            <td>{item.telefono}</td>
                            <td>{item.numero_personas}</td>
                            <td><Button onClick={()=> onDelete(item.id) }>
                                <BsFillTrashFill/>Eliminar</Button></td>
                            <td><Button onClick={()=> onUpdate(item)}>
                            <GrUpdate/>Editar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Footer />
        </>
    )
}

export default function carEditar({id, form}){
   
    return(
      <>
      </>
    )
  }