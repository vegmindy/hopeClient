// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// import { Link } from 'react-router-dom'

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar style={{border:"2px solid black"}}className="navbar-dark bg-dark" light expand="md">
//         <NavbarBrand href="/">Team Hope</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavLink><Link to="/login">Login</Link></NavLink>
//             <NavItem style={{padding: ".5rem"}}><Link to="/review/all">My Reviews</Link></NavItem>
//             <NavItem>
//               <NavLink><Link to="/search">Search</Link></NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink><Link to="/logout">Logout</Link></NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;

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
            <NavLink><Link to="/login">Login</Link></NavLink>
            <NavItem style={{padding: ".5rem"}}><Link to="/review/all">My Reviews</Link></NavItem>
            <NavItem>
              <NavLink><Link to="/search">Search</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/logout">Logout</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;