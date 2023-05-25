import Rodape from '@/components/Rodape'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputados from '../../services/apiDeputados'

const Detalhes = ({ deputado, }) => {

  return (
    <Pagina>
      <Row>
        <Col md={3}>
        <Card.Img src={deputado.ultimoStatus.urlFoto} />
      
        </Col>
        <Col md={9}>
          
        <Card.Body >
                    
                    <p><strong>Nome: {deputado.nomeCivil}</strong></p>
                    <p><strong>CPF: {deputado.cpf}</strong></p>
                    <p><strong>Data de Nascimento: {deputado.dataNascimento}</strong></p>
                    <p><strong>Naturalidade: {deputado.municipioNascimento} - {deputado.ufNascimento}</strong></p>
                    <p><strong>Escolaridade: {deputado.escolaridade}</strong></p>
                    <p><strong>Partido: {deputado.ultimoStatus.siglaPartido}</strong></p>
                    <p><strong>Condição Eleitoral: {deputado.ultimoStatus.condicaoEleitoral}</strong></p>
                    <p><strong>Situação: {deputado.ultimoStatus.situacao}</strong></p>
                    
                </Card.Body>
                
        </Col>
        
    </Row>
    
    <Row md={2}>
    <Accordion eventKey="0" className='pt-5 '>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Gabinete</Accordion.Header>
        <Accordion.Body>
        <p><strong>Nome: {deputado.ultimoStatus.gabinete.nome}</strong></p>
        <p><strong>Predio: {deputado.ultimoStatus.gabinete.predio}</strong></p>
        <p><strong>Sala: {deputado.ultimoStatus.gabinete.sala}</strong></p>
        <p><strong>Andar: {deputado.ultimoStatus.gabinete.andar}</strong></p>
        <p><strong>Telefone: {deputado.ultimoStatus.gabinete.telefone}</strong></p>
        <p><strong>Email: {deputado.ultimoStatus.gabinete.email}</strong></p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

      <Accordion eventKey="0" className='pt-5 pb-10'>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Frente Parlamentares</Accordion.Header>
        <Accordion.Body>
          a
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

</Row>
    
    <Rodape/>
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {
  
  const id = context.params.id

  const resultado = await apiDeputados.get("/deputados/" + id )
  const deputado = resultado.data.dados

  return {
    props: {
      deputado,
    }, // will be passed to the page component as props
  }
}   