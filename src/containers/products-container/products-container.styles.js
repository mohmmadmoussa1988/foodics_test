import styled from "styled-components";
export const ProductsContainerWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  min-height: 500px;
  margin: 0 auto;
  width: 902px;
  padding: 40px 30px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgb(23 55 83 / 10%);
  @media only screen and (max-width: 962px) {
    width: 90%;
    padding: 5%;
  }
`;

export const ContainerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 962px) {
    flex-direction: column;
  }
`;
