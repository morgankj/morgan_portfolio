import styled from "styled-components";

export default function Contact() {
    return (
        <StyledContact>
            <h1>Contact Me</h1>
            <div>
                <p>For business inquiries, please feel free to reach out to me at: <a href="mailto:morgan.kjones95@gmail.com"><i class="fa-solid fa-envelope"></i>morgan.kjones95@gmail.com</a></p>
                <p>Or message me on: <a href="https://www.linkedin.com/in/morgankjones95/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></p>
            </div>
        </StyledContact>
    );
}

const StyledContact = styled.div`
    background-color: #94D2BD;
    margin: 5rem;
    padding: 2rem;

    p {
        margin: 1rem;
    }

    h1 {
        color: #005F73;
        margin-bottom: 2rem;
    }

    a:hover {
        color: #0A9396;
    }
`