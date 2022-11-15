import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNavbar className="navbar">
            <a href="/">MORGANJONES</a>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/aboutMe" >AboutMe</Link></li>
                </ul>
            </nav>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    a {
        color: white;
        font-weight: bold;
        margin: 0 2rem;
    }

    ul {
        list-style-type: none;
        display: flex;
    }
`