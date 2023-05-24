import Link from 'next/link'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputados from '../../services/apiDeputados'

const Detalhes = ({ deputado, despesasDeputado, profissoesDeputado }) => {

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
                    <p><strong>Data de Falecimento: {deputado.dataFalecimento}</strong></p>
                    <p><strong>Naturalidade: {deputado.ufNascimento}</strong></p>
                    <p><strong>Escolaridade: {deputado.escolaridade}</strong></p>
                    <p><strong>Partido: {deputado.ultimoStatus.siglaPartido}</strong></p>
                       
                </Card.Body>
        </Col>
    </Row>

    
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiDeputados.get("/deputados/" + id)
  const deputado = resultado.data.dados

  const despesas = await apiDeputados.get("/deputados/" + id + "/despesas")
  const despesasDeputado = despesas.data.dados

  const profissoes = await apiDeputados.get("/deputados/" + id + "/profissoes")
  const profissoesDeputado = profissoes.data.dados


  return {
    props: {
      deputado,
      despesasDeputado,
      profissoesDeputado
    }, // will be passed to the page component as props
  }
}   