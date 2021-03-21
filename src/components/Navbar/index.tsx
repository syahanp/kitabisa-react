import React from 'react';
import styled from 'styled-components';
import Filter from '../Filter';
import Logo from '../../assets/img/kitabisa.png';

const Navbar = () => {  
    return (
        <Nav>
            <img src={Logo} alt="logo"/>

            <Filter />
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img {
        height: auto;
        width: auto;
        max-height: 65px;
    }

    @media screen and (max-width: 550px) {
        justify-content: center;

        img {
            margin-bottom: 1rem;
        }
    }
`
