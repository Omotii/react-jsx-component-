import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './com.css'

// this component is place for styling purpose/semantic purpose it not required in this checkpoint
// I simply created an header embedding a react navbar locally styled in com.css

const Header = () => {
    return (
        <>
            <Container>
                <header className="header d-flex justify-content-between">
                    <h1 id="heading-text">Eva Bright Chemicals</h1>
                    <Navbar>
                        <Nav>
                            <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
                            <Nav.Link href="#about" className='nav-item'>About</Nav.Link>
                            <Nav.Link href="#product" className='nav-item'>Products</Nav.Link>
                            <Nav.Link href="#shop" className='nav-item'>Online Shop</Nav.Link>
                        </Nav>
                    </Navbar>
                </header>
            </Container>
        </>
    )
}

export default Header