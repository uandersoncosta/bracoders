import React, { useState } from "react";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Data from "./listaSites.json";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState"

import light from "./styles/styleMode/light";
import dark from "./styles/styleMode/dark";

import { Container, ListaCards, Section } from "./styles/styles";
import { Nav } from "./components/Navbar/style";

export function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [theme, setTheme] = usePersistedState('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  const getFilteredItems = () => {
    let filteredItems = Data;
    if (selectedCategory) {
      filteredItems = Data.filter(
        (item) => item.categoria === selectedCategory
      );
    }
    return filteredItems;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Nav>
          <Navbar toogleTheme={toogleTheme} />
        </Nav>

        <Section>
          <Sidebar
            items={Data}
            handleCategoryClick={handleCategoryClick}
            setSelectedCategory={setSelectedCategory}
          />

          <ListaCards>
            <Card item={getFilteredItems()} />
          </ListaCards>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
