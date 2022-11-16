import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNavbar className="navbar">
            <a href="/" id="mainLogo">
                <h3 className="yellowTailFont">MorganJones</h3>
            </a>
            <nav>
                <ul className="quicksandFont">
                    <li><Link to="/" >Projects</Link></li>
                    <li><Link to="/about" >About Me</Link></li>
                    <li><Link to="/contact" >Contact Me</Link></li>
                </ul>
            </nav>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;

    #mainLogo, ul {
        display: flex;
    }

    #mainLogo {
        font-size: 3.2rem;
    }

    a {
        margin: 0 2rem;
    }

    ul {
        list-style-type: none;
    }
`