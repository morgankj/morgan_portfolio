import styled from "styled-components";
import underDog from "../Images/underDogDevs.png";

export default function Projects() {
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <p>Description of my projects</p>
            <div className="projectContainer">
                <div className="project">
                    <h2>Underdog Devs</h2>
                    <a href="https://www.underdogdevs.org/" target="_blank" rel="noreferrer"><img alt="screenshot of Underdog Devs website" src={underDog} /></a>
                </div>
                <div className="project">PROJECT 2</div>
                <div className="project">PROJECT 3</div>
            </div>
        </StyledProjects>
    );
}

const StyledProjects = styled.div`
    h1 {
        color: #CA6702;
    }

    .projectContainer {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 50%;
    }

    .project {
        background: white;
        width: 30%;
        display: flex;
    }
`