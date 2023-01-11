import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1rem 3rem;
  border-bottom: 1px solid ${props => props.theme.colors.navborder};
  background-color: ${props => props.theme.colors.navcolor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  #navicons {
    display: flex;
    align-items: center;
  }
  
  #FiMenu {
    padding: .7rem;
    display: none;
  }

  #logoSVG {
    width: 150px;
  }
`;