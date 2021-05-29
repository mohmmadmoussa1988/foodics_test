import React from "react";
import { MenuPageWrapper } from "./categories-sorting.styles";
import CategoriesSorting from "../../containers/categories-sorting/categories-sorting";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const CategoriesSortingPage = () => {
  return (
    <MenuPageWrapper>
      <TopHeader />
      <CategoriesSorting />
    </MenuPageWrapper>
  );
};

export default CategoriesSortingPage;
