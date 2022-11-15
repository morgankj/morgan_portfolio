import styled from "styled-components";
import mePiper from "../Images/meAndPiper.png";

export default function AboutMe() {
    return (
        <StyledAbout>
            <h1>ABOUT ME</h1>
            <img alt="girl with dog" src={mePiper} />
        </StyledAbout>
    );
}

const StyledAbout = styled.div`
    background-color: yellow;
`