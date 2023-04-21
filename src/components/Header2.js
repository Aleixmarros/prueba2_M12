import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    return (
        <>

            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="transparent" expand={expand} sticky="top" className="navigation navbar-dark">
                   
                    <Container fluid>
                    <h2 className="hovertown titulo">
                        FutMan
                    </h2>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" />
                        
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='bg-dark'
                            style={{textAlign: 'center', fontSize: 20}}
                        >
                            
                            <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
                                <Nav.Link href="/Play" className="text-white">Play</Nav.Link>
                                <Nav.Link href="/Classification" className="text-white">Classification</Nav.Link>
                                <Nav.Link href="/Players" className="text-white">Players</Nav.Link>
                                <Nav.Link href="/Teams" className="text-white">Teams</Nav.Link>
                                <Nav.Link href="/MyTeam" className="text-white">My Team</Nav.Link>
                                <Nav.Link href="/Profile" className="text-white">Profile</Nav.Link>
                                <Nav.Link href="/AboutUs" className="text-white">About Us</Nav.Link>
                                <Nav.Link href="/sign-up" className="text-white">Sign Up</Nav.Link>
                                <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
                            </Nav>

                               
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;