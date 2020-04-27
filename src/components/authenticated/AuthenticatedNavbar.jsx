import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from "reactstrap";
import AuthenticatedNavbarItem from "components/navbar/AuthenticatedNavbarItem";
import Routes from "constants/Routes";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import navbarItems from 'components/navbar/constants/NavbarItems';

class AuthenticatedNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href={ Routes.ROOT }>Plantastic</NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="mr-auto" navbar>
            {
              navbarItems.map((navbarItem) =>
                <AuthenticatedNavbarItem
                  path={ navbarItem.path }
                  icon={ navbarItem.icon }
                  name={ navbarItem.name }
                  key={ navbarItem.path }
                />
              )
            }
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={ faCog } />
                { ' ' }
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Preferences…
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AuthenticatedNavbar;
