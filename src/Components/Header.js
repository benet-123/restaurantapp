import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr-r-BGg0B3X2nXtKkHg-ytlHUnBMqPoPlQ&usqp=CAU"
              width="55"
              height="50"
              className="d-inline-block align-top"
            /> {' '}
           &nbsp; &nbsp; &nbsp;Find me Here
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
