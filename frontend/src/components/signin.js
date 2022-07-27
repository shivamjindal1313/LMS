import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react'
import { app } from '../firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = getAuth();

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setuserType] = useState("0");

    const handleChange = (event) => {
        setuserType(event.target.value)
    }
    const credentials = {
        email, password, usertype
    }

    const checkUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                if (usertype === 'SuperLady')
                    navigate('/superladylogin')
                else if (email === 'admin@admin.com') {
                    navigate('/adminlogin')
                } else {
                    navigate('/userlogin')
                }
            } else {
                console.log('user is signed out')
            }
        });
    }
    useEffect(() => {
        checkUser()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                if (usertype === 'SuperLady')
                    navigate('/superladylogin')
                else if (email === 'admin@admin.com') {

                    navigate('/adminlogin')
                } else {
                    navigate('/userlogin')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        console.log(credentials)
        // console.log(usertype)
    }
    return (
        // <Container>
        <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <div key='inline-radio' className="mb-3">
                        <Form.Check
                            inline
                            label="User"
                            name="group1"
                            type='radio'
                            id='inline-radio-1'
                            value="User"
                            checked={usertype === 'User'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            label="Superlady"
                            name="group1"
                            type='radio'
                            id='inline-radio-2'
                            value="SuperLady"
                            checked={usertype === 'SuperLady'}
                            onChange={handleChange}
                        />

                    </div>
                    <Button variant="primary" type="submit" style={{ backgroundColor: "#e10c82" }}>
                        Submit
                    </Button>
                </Form>
            </Col>

        </Row>
        // </Container>

    );
}

export default Signin;