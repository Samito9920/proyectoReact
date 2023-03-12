import React from "react";
import Container from "react-bootstrap/esm/Container";
import pasta from "../assets/pasta.jpeg"
import "../style/Body.css"
import ListGroup from "react-bootstrap/ListGroup"
import restaurante from '../assets/restaurante.jpeg'
import Card from "react-bootstrap/Card"
import Header from "./Header";
import Form from "./Form"
import Footer from "./Footer";
import restaurantedentro from '../assets/restaurantedentro.jpeg';

export default function Body() {
    return (
        <>
            <Header />
            <Container>
                <div className="d-flex justify-content-center mb-2">
                    <div className="p-2">
                        <img id="body-img" src={pasta} />
                    </div>
                    <div className="p-2 m-2" id="parrafo">
                        <p id="titulo">Historia</p>
                        <div id="textoHistoria">
                            <Card.Body>A progression of rare and beautiful ingredients where texture, flavour and
                                harmony is paramount. Delve into the la mia vida
                                dining experience with Wilson Alpala Menu.</Card.Body>
                        </div>
                    </div>
                </div>
                <div id="division">

                </div>
                <div className="d-flex justify-content-center mb-2">
                    <div className="p-2">
                        <p id="titulo">Menu</p>
                        <div className="p-2" id="parrafo">
                            <ListGroup>
                                <ListGroup.Item>Langostinos Empanizados con quinua, semilla de sambo sobre salsa alemana</ListGroup.Item>
                                <ListGroup.Item>Pulpo al Grill Glaseado con miso, papa chaucha horneada, hongos del bosque, acompañado de mezclum de hojas verdes</ListGroup.Item>
                                <ListGroup.Item>Ensalada Vegetariana-Mix de lechuga fresca, aguacate, tomate cherry y verdura salteada con nueces y almendras</ListGroup.Item>
                                <ListGroup.Item>Degustación El Ventanal Langostinos crocantes, ensalada fresca y pulpo con salsa de chochos</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                    <div className="p-2 m-2" id="img" >
                        <img id="body-img" src={restaurante} />
                    </div>
                </div>
                <div id="division">

                </div>
                <div className="d-flex justify-content-center mb-2">
                    <div className="p-2" id="img">
                        <img id="img-restaurant" src={restaurantedentro} />
                    </div>
                    <div className="p-2 m-2" id="parrafo">
                    <Form />
                       
                    </div>
                </div>
                
                      
                   


       
            </Container>

            <Footer />
        </>
    )
}