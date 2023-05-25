import Link from 'next/link';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Pagina from "../../components/Pagina";
import apiDeputados from '../../services/apiDeputados';

const index = ({ deputados }) => {

  return (
    <Pagina titulo='Deputados'>

      <Row md={4} xs={1} className="g-4"> 
      
        {deputados.map(item => (
          <Col key={item.id}>
          <Card >
          <Link href={'/deputados/' + item.id}>  
      <Card.Img src={item.urlFoto} />
      </Link>
      
      <Card.Body>
        <Card.Title>{item.nome}</Card.Title>
       

      </Card.Body>
            
    </Card>
          
          </Col>

          
        ))}

      </Row>

      

    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get("/deputados")
  const deputados = resultado.data.dados

  return {
    props: {
      deputados,
    }, // will be passed to the page component as props
  }
}