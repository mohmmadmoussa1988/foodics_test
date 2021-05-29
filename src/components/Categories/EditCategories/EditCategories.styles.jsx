import styled from 'styled-components';

export const AddButtonDiv = styled.div`
text-align: right;
margin-bottom:10px;
`;
export const InputRow = styled.div`
width:100%;
label{
    width:100%;
}
input{
    float: right;
    width:70%;
}
`;

export const SubmitForm = styled.form`
button{
    float: right;
    background-color:green;
    color:white;
    border:none;
    border-radius:10px;
}
input:read-only{
    background-color: #eee;
    border:1px solid #eee;
}
`;

export const EditCategoryContainerWrapper = styled.div`
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


export const Edit = styled.div`
 background-color:green;
 padding:10px;
 color:white;
 height:50px;
 cursor:pointer;
 margin-right:10px;
 border-radius:10px;
`;

export const InputSelectRow = styled.div`

label{
  width:100%;
  p{
    float: right;
    width:70%;
    background-color:#eee
  }
  select{
    float: right;
    width:70%;
    background-color:#eee
  }
}
`;

export const DeleteButton = styled.div`
 background-color:red;
 padding:10px;
 color:white;
 height:50px;
 cursor:pointer;
 border-radius:10px;

`;
export const TopMenu = styled.div`
display: flex;
flex-direction: row-reverse;
width:200px;
`;
export const RestoreButton = styled.div`
 background-color:green;
 padding:10px;
 color:white;
 height:50px;
 cursor:pointer;
 border-radius:10px;

`;


