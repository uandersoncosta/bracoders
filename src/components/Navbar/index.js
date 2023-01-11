import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";

import { FiMenu } from "react-icons/fi"
import { BsBookmarkFill } from "react-icons/bs"

import light from "../../styles/styleMode/light";
import dark from "../../styles/styleMode/dark";


export const Navbar = ({ toogleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <img id="logoSVG" src="assets/bracoders-logo.svg" alt="" />
      <div id="navicons">
        <BsBookmarkFill style={{ padding: ".5rem"}} size={35}/>
        <ReactSwitch
          onChange={toogleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={35}
          handleDiameter={20}
          onHandleColor="#575553"
          offHandleColor="#FAF5F0"
          offColor="#E6E1DC"
          onColor="#302F2F"
        />
      </div>
    </>
  );
};
