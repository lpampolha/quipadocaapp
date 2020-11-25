import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Col, Row } from 'react-bootstrap'
import BgBanner from '../../../assets/images/background_paes_2.jpg'
import Img1 from '../../../assets/images/pao_5.png'
import Img2 from '../../../assets/images/pao_alho.png'

const BannerHome = () => {
    return (
        <Banner>
            <div className="bg">
                <BannerItem>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Row className="mt-5 justify-content-center align-itens-center">
                                <Col md={2} sm={2}>
                                    <img src={Img1} className="img-fluid" alt="" />
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Pão Sovado</h2>
                                    <div className="mb-4  desc">Pão Sovado e trabalhado com especiarias</div>
                                    <button variant="danger">Comprar</button>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        
                        <Carousel.Item>
                            <Row className="mt-5 justify-content-center align-itens-center">
                                <Col md={2} sm={2}>
                                    <img src={Img2} className="img-fluid" alt="" />
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Pão Sovado</h2>
                                    <div className="mb-4 desc">Pão Sovado e trabalhado com especiarias</div>
                                    <button variant="danger">Comprar</button>
                                </Col>
                            </Row>
                        </Carousel.Item>

                    </Carousel>
                </BannerItem>

            </div>
        </Banner>
    )
}

export default BannerHome


const Banner = styled.div`
    display: ${props => props.hidden === true ? 'none' : 'block'};
    height: 500px;
    width: 100%;
    background-image: url(${BgBanner});
    background-size: 100%;
    color: #fff;
    overflow: hidden;

    .bg{
        background: #0009;
        height: 500px;
    }
`
const BannerItem = styled.div`

`