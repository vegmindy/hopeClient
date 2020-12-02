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
      {/* <Navbar color="light" light expand="md"> */}
      <Navbar style={{border:"2px solid black"}}className="navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/">Team Hope</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink><Link to="/login">Login</Link></NavLink>
            </NavItem>
            {
              () => {
                if (localStorage.getItem('sessionToken')) {
                } else {
                  return <NavItem>
                    <NavLink><Link to="/login">Login</Link></NavLink>
                  </NavItem>;
                }
              }
            }
            <NavItem style={{padding: ".5rem"}}><Link to="/review/all">My Reviews</Link></NavItem>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">HOPE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink><Link to="/login">Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/search">Search</Link></NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Profile
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem>
                  Favorites List
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
            <NavItem>
              <NavLink><Link to="/logout">Logout</Link></NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Additional Text Here</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
