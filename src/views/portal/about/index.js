import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
    return (
        <About>
            <TitlePage title="Sobre" sub="Conheça nossa história" />


            <Description>
                <Container>
                    <h1>asdasd</h1>
                </Container>
            </Description>
            <Collaborators>
                <Container>
                    <Row>
                        <BoxItem>First, but unordered</BoxItem>
                        <BoxItem>Second, but last</BoxItem>
                        <BoxItem>Third, but second</BoxItem>
                        <BoxItem>Third, but second</BoxItem>
                    </Row>
                </Container>

            </Collaborators>
        </About>
    )
}


const About = styled.div`
    display:block;
`
const Description = styled.div`
    height: 200px;
    background: #fff4;
    width: 100%;
    display:flex;
`
const Collaborators = styled.div`

    min-height: 200px;
    background: yellow;
    width: 100%;
    padding: 20px 0;
`
const BoxItem = styled(Col)`
    background: red;
    height: 200px;
    margin: 10px;
    width: 20%;
`

