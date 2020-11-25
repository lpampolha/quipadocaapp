import React, { useState } from 'react'
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa'


import ImgLogo from '../../assets/images/pao_1.jpeg'
import { Link } from 'react-router-dom'
import { Button, Form, Spinner } from 'react-bootstrap'


export default () => {

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)


    return (
        <Login imgLogo={ImgLogo}>
            {/* Outer Row */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bem Vindo à Quipádoca</h1>
                                        </div>
                                        {/* <form className="user">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    {/* <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                            </label> }
                                                </div>
                                            </div>
                                            <a
                                                href="index.html"
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                Login
                        </a>
                                        </form> */}


                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                            </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                
                                                {loading ? (
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="grow"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    Loading...
                                                </>
                                                ): "Login"} 
                                            </Button>
                                        </Form>



                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/">
                                                <FaHome /> Pagina Inicial
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Login>

    )
}



const Login = styled.div.attrs({
    className: 'container',
})`
    .bg-login-image{
        background-image: url(${ImgLogo})
    }
`;
