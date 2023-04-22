import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App.css';

function OffcanvasExample() {
    const titulo = 'FutMan';
    const [loggedIn, setLoggedIn] = useState(true);    // si el usuario no ha iniciado sesión
    const [showElements, setShowElements] = useState(loggedIn);


    if (!loggedIn) {
        // Si el usuario no está logueado, oculta los elementos que no deseas mostrar
        const elementsToHide = document.querySelectorAll('.my-element');
        elementsToHide.forEach(element => {
            element.classList.add('hidden');
        });
    }
    // Cuando el usuario inicia sesión con éxito, muestra los elementos que deseas mostrar
    const elementsToShow = document.querySelectorAll('.my-element');
    elementsToShow.forEach(element => {
        element.classList.remove('hidden');
    });


    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="transparent" expand={expand} sticky="top" className="navigation navbar-dark">
                    <Container fluid>
                    <h2 className="hovertown titulo">{titulo}</h2>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='bg-dark'
                            style={{ textAlign: 'center', fontSize: 20 }}
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {loggedIn ? (
                                        <>
                                            <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
                                            <Nav.Link href="/Play" className="text-white">Play</Nav.Link>
                                            <Nav.Link href="/Classification" className="text-white">Classification</Nav.Link>
                                            <Nav.Link href="/Players" className="text-white">Players</Nav.Link>
                                            <Nav.Link href="/Teams" className="text-white">Teams</Nav.Link>
                                            <Nav.Link href="/MyTeam" className="text-white">My Team</Nav.Link>
                                            <Nav.Link href="/Profile" className="text-white">Profile</Nav.Link>
                                            <Nav.Link href="/AboutUs" className="text-white">About Us</Nav.Link>
                                            <Nav.Link  onClick={() => setLoggedIn(false)} className="text-white">Logout</Nav.Link>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
                                            <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
                                            <Nav.Link href="/AboutUs" className="text-white">About Us</Nav.Link>
                                        </>
                                    )}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};


// }

export default OffcanvasExample;