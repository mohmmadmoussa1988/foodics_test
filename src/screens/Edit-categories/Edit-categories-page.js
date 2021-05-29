import React from "react";
import { EditCategoryPageWrapper } from "./Edit-categories-page.styles";
import CustomersContainer from "../../containers/customers-container/customers-container.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.component";
import EditCategory from "../../components/Categories/EditCategories/EditCategories.component";
const EditCategoryPage = () => {
  return (
    <EditCategoryPageWrapper>
      <TopHeader />
      <EditCategory />
    </EditCategoryPageWrapper>
  );
};

export default EditCategoryPage;
