import React from "react";
import { CustomersPageWrapper } from "./customers-page.styles";
import CustomersContainer from "../../containers/customers-container/customers-container.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const CustomersPage = () => {
  return (
    <CustomersPageWrapper>
      <TopHeader />
      <CustomersContainer />
    </CustomersPageWrapper>
  );
};

export default CustomersPage;
