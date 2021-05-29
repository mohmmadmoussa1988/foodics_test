import React from "react";
import { CustomersPageWrapper } from "./products-page.styles";
import ProductsContainer from "../../containers/products-container/products-container.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const ProductsPage = () => {
  return (
    <CustomersPageWrapper>
      <TopHeader />
      <ProductsContainer />
    </CustomersPageWrapper>
  );
};

export default ProductsPage;
