import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
//import Info from './info'
//import About from './about'
//import Menu from './menu'
import Products from './products'


const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Products />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
`