import React from "react";
import { Img, ImgandIcons, NameandLink, OneCard } from "./style";
import { BsBookmark } from "react-icons/bs"

export const Card = ({ item }) => {

  const randomNumber= () => {
    return Math.round(Math.random() * 500)
  }

  return (
    <>
      {item.map((item, index) => (
        <OneCard key={index}>
          <ImgandIcons>
            <Img src={item.imagem} />
            <div className="icons">
              <span className="iconspan">{randomNumber()}</span>
              <BsBookmark id="saveicon" size={18}/>
            </div>
          </ImgandIcons>
          <NameandLink>
            <h3 className="itemNome">{item.nome}</h3>
            <a href={item.link} id="iconLink" target="_blank">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </a>
          </NameandLink>
          <p className="itemDescricao">{item.descricao}</p>
          <h4 className="itemCategoria">{item.categoria}</h4>
        </OneCard>
      ))}
    </>
  );
};
