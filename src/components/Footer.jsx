import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai"
import { FaWhatsappSquare } from "react-icons/fa"
import { BiDirections } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conectanos y Siguenos en nuestras redes Sociales</span>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                La Mía Vida
              </h6>
              <p>
                Una cocina con estilo único, desde los fogones hasta tu paladar creando momentos y sabores que no olvidarás.
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Redes Sociales</h6>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <BsFacebook />
                </div>
                <a href='#!' className='text-reset p-2'>
                  Facebook
                </a>
              </div>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <AiFillInstagram className='icon' />
                </div>
                <a href='#!' className='text-reset p-2'>
                  Instagram
                </a>
              </div>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <FaWhatsappSquare className='icon' />
                </div>
                <a href='#!' className='text-reset p-2'>
                  WhatsApp
                </a>
              </div>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contactanos</h6>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <BiDirections />
                </div>
                <p className='p-2'>
                  Quito, Centro Historico
                </p>
              </div>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <AiTwotoneMail />
                </div>
                <p className='p-2'>
                  lamiavida@gmail.com
                </p>
              </div>
              <div className='d-flex flex-sm-row mb-2'>
                <div className='p-2'>
                  <BsFillTelephoneFill />
                </div>
                <p className='p-2'>
                  + 1234523
                </p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Quito - Ecuador
      </div>
    </MDBFooter>
  );
}

