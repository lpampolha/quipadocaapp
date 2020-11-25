import React from 'react'
import { Route } from 'react-router-dom'
import LayoutAdmin from '../../components/Layout/admin/index.js'
import Dash from './dash'

import { FaTachometerAlt, FaPizzaSlice, FaImage, FaTools, FaTags } from 'react-icons/fa'


const MenuItens = [
    {
        name: "DashBoard",
        path: '/',
        icon: <FaTachometerAlt />,
        component: () => <Dash />
    },
    {
        name: "Banner",
        path: '/banner',
        icon: <FaImage />,
        component: () => <h1>Produtos</h1>
    },
    {
        name: "Categorias",
        path: '/categorias',
        icon: <FaTags />,
        component: () => <h1>Categorias</h1>
    },
    {
        name: "Produtos",
        path: '/produtos',
        icon: <FaPizzaSlice />,
        component: () => <h1>Produtos</h1>
    },
    {
        name: "Serviços",
        path: '/servicos',
        icon: <FaTools />,
        component: () => <h1>Servicos</h1>
    },
]


export default (props) => {

    return (
        <LayoutAdmin Menu={MenuItens}>
            {MenuItens.map((item, i) => (
                <Route key={i} exact basename={props.match.path} path={props.match.path + item.path} component={item.component} />
            ))}
        </LayoutAdmin>
    )
}