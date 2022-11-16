import styled from "styled-components";

export default function Projects() {
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <p>Description of my projects</p>
        </StyledProjects>
    );
}

const StyledProjects = styled.div`
    h1 {
        color: #CA6702;
    }
`