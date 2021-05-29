import React from "react";
import { MenuPageWrapper } from "./categories-page.styles";
import CategoriesContainer from "../../containers/categories-container/categories-container";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const CategoriesPage = () => {
  return (
    <MenuPageWrapper>
      <TopHeader />
      <CategoriesContainer />
    </MenuPageWrapper>
  );
};

export default CategoriesPage;
