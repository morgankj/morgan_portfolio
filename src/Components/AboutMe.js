import styled from "styled-components";
import mePiper from "../Images/meAndPiper.png";
import myResume from "../Images/myResume.pdf";

export default function AboutMe() {
    return (
        <StyledAbout>
            <div className="picAndDesc">
                <div className="aboutText">
                    <h1>About Me</h1>
                    <p>The internet is the crossroads that brings us all together and makes the world a smaller place - I want to help pave those roads AND make them beautiful as your Web Developer!</p>
                    <p>Coming from a background in art and design, I have a passion for compelling and clean media. I aim to create applications and websites that dynamically pull in users and allow them to enjoy the full spectrum of what we have to offer with a seamless user experience.</p>
                    <p>I am an efficient web developer with a Bachelor's degree in Digital Entertainment Technology and 3 years of experience in challenging development environments. I am deadline driven, organized, and a committed team player with excellent communication skills (honed through practical experience).</p>
                    <p>I thrive off of working with friends and peers to bring ideas to life!</p>
                </div>
                <img alt="girl with dog" src={mePiper} />
            </div>
            <div className="resume">
                <h1>My Resume</h1>
                <embed src={myResume} width="800px" height="1088px" />
            </div>
        </StyledAbout>
    );
}

const StyledAbout = styled.div`
    .picAndDesc {
        display: flex;
        align-items: center;
        margin: 5rem;
    }

    .aboutText p {
        text-align: right;
        margin: 1.5rem;
    }

    img {
        height: 50rem;
        border: 2rem solid #EE9B00;
        margin-left: 5rem;
    }

    .resume {
        margin-bottom: 5rem;
    }
`