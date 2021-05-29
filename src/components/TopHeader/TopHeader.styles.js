import styled from "styled-components";
export const TopHeaderWrapper = styled.div`
  flex: 1;
  text-align: left;
  padding: 52px 0 0px 0;
  color: white;
  flex-direction: row-reverse;
  display: flex;
  width: 90%;
  a {
    color: white;
  }
  .active {
    div {
      background-color: #8d6806;
    }
  }
`;
export const IDWrapper = styled.div`
  font-family: "SF-medium";
  font-size: 16px;
  line-height: 22px;
  text-shadow: 0px 0px 2px rgb(23 55 83 / 15%);
  margin-bottom: 14px;
  letter-spacing: 1px;
`;
export const NameWrapper = styled.div`
  font-family: "SF-semibold";
  font-size: 18px;
  line-height: 22px;
  text-shadow: 0px 0px 2px rgb(23 55 83 / 15%);
  background-color: #000;
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px 10px 0px 0px;
`;
