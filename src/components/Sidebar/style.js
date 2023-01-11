import styled from "styled-components";

export const Aside = styled.div`
  width: 300px;
  height: 100vh;
  margin: 4rem 0px 0px 3rem;

  #todosLink {
    margin-left: 1.2rem;
    cursor: pointer;
    color: #ffb703;
  }

  ul li {
    padding: 0.8rem;
  }

  ul li a {
    color: #474e68;
    padding: 0.4rem;
    font-size: 0.9rem;
    font-weight: 700;
  }

  ul li a:hover {
    color: #474747;
  }

  ul li i {
    padding: 0.5rem;
    background-color: #86ba90;
    border-radius: 0.3125rem;
  }

  @media (max-width: 931px) {
    width: 100%;
    height: 200px;
    margin: 1rem 1rem 3rem;
    
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
