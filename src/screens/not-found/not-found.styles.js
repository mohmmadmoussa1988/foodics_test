import styled from "styled-components";
export const NotFoundWrapper = styled.div`
  display: flex;
  width: 962px;
  margin: 0 auto;
  flex-direction: column;
  @media only screen and (max-width: 962px) {
    width: 100%;
  }
`;

export const NotFoundContainerWrapper = styled.div`
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
  p {
    font-size: 30px;
    text-align: center;
  }
`;
