
// import './Navbar.css';

// // const Navbar = () => {
// //     return(
// //         <div>
// //             <nav id="nav">
// //                 <h1 className="name">App Name</h1>
// //                 <button className="login">Login</button>
// //                 <br/>
// //                 <button className="signup">Signup</button>
// //             </nav>
// //         </div>
// //     )
// // }


// const Navbar = () => {
//     return(
//         <div>
//             <nav id="nav">
//                 <button className="profile">My profile</button>
//             </nav>
//         </div>
//     )
// }


// export default Navbar;


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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">App Name</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Opiton 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Option 2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
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
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Additional Text Here</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
