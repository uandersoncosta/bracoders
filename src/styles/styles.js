import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem 1rem 0px;


  @media (max-width: 931px) {
    flex-direction: column;
  }
  
`;

export const ListaCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 564px) {
    margin-top: 9rem;
  }
`;


