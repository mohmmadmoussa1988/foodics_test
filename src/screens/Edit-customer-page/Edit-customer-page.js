import React from "react";
import { EditCustomerPageWrapper } from "./Edit-customer-page.styles";
import CustomersContainer from "../../containers/customers-container/customers-container.jsx";
import TopHeader from "../../components/TopHeader/TopHeader.component";
import EditCustomer from "../../components/Customer/EditCustomer/EditCustomer.component";
const EditCustomerPage = () => {
  return (
    <EditCustomerPageWrapper>
      <TopHeader />
      <EditCustomer />
    </EditCustomerPageWrapper>
  );
};

export default EditCustomerPage;
