import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div>© 2022 MorganJones, LLC. All rights reserved.</div>
      
      <ul className="socialLinks">
        <li><a href="https://www.linkedin.com/in/morgankjones95/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-xl"></i></a></li>
        <li><a href="https://github.com/morgankj" target="_blank" rel="noreferrer"><i class="fa-brands fa-github fa-xl"></i></a></li>
        <li><a href="mailto:morgan.kjones95@gmail.com"><i class="fa-solid fa-envelope fa-xl"></i></a></li>
      </ul>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  ul {
    display: flex;
    list-style-type: none;
    margin-left: 38%;
    a {
      margin-left: 1rem;
    }
  }
`;
