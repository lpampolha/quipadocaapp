import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

export default () => {
    return (
        <Footer>
            <Container>
                <FooterInfo>
                    <Row>
                        <Col md={5}>
                            <div className="title">Sobre Nós</div>
                            <div className="aboutUs">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="title">Nossos destaques</div>
                            <div className="menu">
                                <div className="text">
                                    <div><span className="icon-calendar"></span> Sept 15, 2018</div>
                                    <div><span className="icon-person"></span> Admin</div>
                                    <div><span className="icon-chat"></span> 19</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="title">Onde estamos</div>
                            <div className="address">
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></li>
                                        <li><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </FooterInfo>
                <Row>
                    <FooterSocial>
                        <AiFillFacebook />
                        <AiFillInstagram />
                    </FooterSocial>
                    <FooterCopy>
                        Todos os Direitos Reservados
                </FooterCopy>
                </Row>
            </Container>
        </Footer>
    )
}



const Footer = styled.div`
    background: #0F1515;
    padding: 10px 0;
    color: #eee;
    border-top: 2px solid  #fac564;


`

const FooterInfo = styled.div`
    .title{
        font-size: 20px;
        font-weight: 600;
        padding: 10px 0;
        border-bottom: thin solid  #fac564;
        margin-bottom: 10px;
        color: #fac564;
    }
`

const FooterSocial = styled.div`
    cursor: pointer;
    width: 100%;
    border-bottom: 1px dotted #ccc;
    padding: 5px;
    svg {
        margin: 5px;
        font-size: 30px;
        :hover{
            color: #fac564;
        }
    }
`
const FooterCopy = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
`

