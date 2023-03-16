import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../image/Logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
return (

    <Navbar bg="light"  expand="lg" className='navigation'>
        <Container className='menu'>
        <Navbar.Brand to="/">
            <NavLink to="/"className="navbar-home"><img src={Logo} alt="Sakura-Kimonos"className='Logo'/></NavLink>
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="">
                <NavLink  to='/' className='text-navbar' href="#home">HOME</NavLink>
                
                <NavLink className='text-navbar' to="/form" href="#Post">PRODUCTS</NavLink>
                
                <NavLink className='text-navbar' to="/advertisement" href="#form">JOIN</NavLink>
                
                <NavLink className='text-navbar' to="/advertisement" href="#form">LOGIN</NavLink>   

                <NavLink className='text-navbar' to="/advertisement" href="#form">🛒</NavLink>             
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    
); 
}

export default Navigation;
