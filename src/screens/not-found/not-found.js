import React from "react";
import { NotFoundWrapper, NotFoundContainerWrapper } from "./not-found.styles";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <TopHeader />
      <NotFoundContainerWrapper>
        <p>Not found</p>
      </NotFoundContainerWrapper>
    </NotFoundWrapper>
  );
};

export default NotFound;
