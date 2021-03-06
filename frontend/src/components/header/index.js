import React from 'react';
import {Container} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from './style.scss';

const Header = () => (
    <header className={styles.header}>
        <Container className="px-0">
            <Navbar light>
                <NavbarBrand href="/">microblog</NavbarBrand>
                <Nav>
                    <NavItem>
                        <FontAwesome name="bell"/>
                    </NavItem>

                    <NavItem>
                        <FontAwesome name="sign-in"/>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    </header>
);

export default Header;
