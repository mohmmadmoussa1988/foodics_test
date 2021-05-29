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