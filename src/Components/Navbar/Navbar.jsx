import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{border:"2px solid black"}}className="navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/">Team Hope</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
<<<<<<< HEAD
            <NavLink><Link to="/login">Login</Link></NavLink>
            <NavItem style={{padding: ".5rem"}}><Link to="/review/all">My Reviews</Link></NavItem>
            <NavItem>
              <NavLink><Link to="/search">Search</Link></NavLink>
            </NavItem>
=======
            <NavItem>
              <NavLink><Link to="/login">Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/search">Search</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reviews
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink><Link to="/review/all">My Reviews</Link></NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
            <NavItem>
              <NavLink><Link to="/logout">Logout</Link></NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
>>>>>>> 446ed4faf59e3839a4147b365799ecfa4b71bb86
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;