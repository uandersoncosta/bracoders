import React from "react";
import { Aside } from "./style";

export const Sidebar = ({ items, handleCategoryClick, setSelectedCategory, }) => {

  const categories = [...new Set(items.map((item) => item.categoria))];

  const handleTodosClick = (event, category) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <Aside>
      <ul>
        <a id="todosLink" onClick={(event) => handleTodosClick(event, null)}>
          Todos
        </a>
        {categories.sort().map((categoria, index) => (
          <li key={index}>
            <a href=""
              onClick={(event) => handleCategoryClick(event, categoria)}
            >
              {categoria}
            </a>
          </li>
        ))}
      </ul>
    </Aside>
  );
};