import styled from "styled-components";

export const OneCard = styled.div`
  width: 28%;
  /* width: 420px; */
  min-height: 270px;
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.6rem;
  box-shadow: 0px 3px 21px -18px rgba(0,0,0,0.59);
  border: 1px solid ${props => props.theme.colors.cardborder};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 21px -10px rgba(0,0,0,0.52);

    #iconLink {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0px);
    }
  }
  
  #iconLink {
    color: ${props => props.theme.colors.primarytext};
    opacity: 0;
    font-size: 1.5rem;
    transition: all .6s;
    flex: 3;
    transform: translateY(15Px);
  }


  .itemDescricao{
    /* min-width: 300px; */
    font-size: .9rem;
    font-weight: 400;
    color: #86868d;
  }

  .itemCategoria{
    margin-top: 1rem;
    padding: .6rem .8rem;
    border-radius: 50px;
    background-color: #FFD56F;
    color: #996B40;
    display: inline-block;
    font-weight: 400;
    font-size: 0.8rem;
  }

  @media (max-width: 1074px) {
    width: 45%;
  }

  @media (max-width: 932px) {
    width: 45%;

    .itemDescricao{
      /* min-width: 300px; */
      font-size: .8rem;
    }
  }

  @media (max-width: 671px) {
    width: 44%;
  }

  @media (max-width: 564px) {
    width: 100%;
  }
  
`;

export const Img = styled.img`
  width: 65px;
  object-fit: cover;
  border-radius: 0.5rem;
  outline: 1px solid rgba(8, 31, 46, 0.21);
`;

export const ImgandIcons = styled.div`
  display: flex;
  justify-content: space-between;

  .icons{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }

  .icons span{
    color: gray;
    font-weight: 600;
    font-size: .9rem;
    margin-right: .1rem;
    
  }

  #saveicon {
    color: gray;
  }
`;

export const NameandLink = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 0px 1rem;

  .itemNome {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primarytext};
  }
`