import React from "react";
import { EditProductPageWrapper } from "./Edit-products-page.styles";
import CustomersContainer from "../../containers/customers-container/customers-container.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.component";
import EditProduct from "../../components/Products/EditProduct/EditProduct.component";
const EditProductPage = () => {
  return (
    <EditProductPageWrapper>
      <TopHeader />
      <EditProduct />
    </EditProductPageWrapper>
  );
};

export default EditProductPage;
