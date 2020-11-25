import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import TitlePage from '../../../components/titlePage'

export default () => {
    return (
        <Service>
            <TitlePage title="Serviços" sub="Obtenha informações dos nossos serviços." />
            <Container>
                <Row>
                    <ServiceItem>First, but unordered</ServiceItem>
                    <ServiceItem>Second, but last</ServiceItem>
                    <ServiceItem>Third, but second</ServiceItem>
                </Row>
            </Container>

        </Service>
    )
}


const Service = styled.div`
    display:block;
    height: 500px;
`


const ServiceItem = styled(Col)`
    background: red;
    height: 200px;
    margin: 10px;
    width: 20%;
`


