import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { putRequest, deleteRequest } from '../../../utils/requests';
import { refreshPage } from '../../../utils/utils';
import Title from '../../../components/Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStartAsync, clearApiResults } from '../../../redux/app/app.actions';
import Loading from '../../../components/loading/loading.component';
import { AddButtonDiv, InputRow, SubmitForm, EditCustomersContainerWrapper, ContainerHeaderWrapper, RestoreButton, Edit, InputSelectRow, TopMenu, DeleteButton } from './EditCustomer.styles';
const EditCustomer = () => {
    let { id } = useParams();
    const [submittedInfo, setSubmittedInfo] = useState({});
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const [results, setResults] = useState(apiResults);
    const [editable, setEditable] = useState('true');
    const [editableInput, setEditableInput] = useState(true);

    useEffect(() => {
        // To be called one time on load
        dispatch(fetchStartAsync(`customers/${id}`, null));
        return () => {
            dispatch(clearApiResults());
        }
    }, []);


    useEffect(() => {
        console.log('apiResults', apiResults);
        if (apiResults && apiResults.data) { setSubmittedInfo(apiResults.data.data); }
    }, [apiResults]);

    function toggleEdit() {
        if (editable == 'true') {
            setEditable('false');
            setEditableInput(false);
        }
        else {
            setEditable('true');
            setEditableInput(true);
        }
    }

    const DeleteCustomer = async (id) => {
        await deleteRequest('customers/' + id);
        refreshPage();
    }

    const RestoreCustomer = async (id) => {
        await putRequest('customers/' + id + '/restore', {});
        refreshPage();
    }


    const handleSubmit = async (event) => {
        console.log(submittedInfo);
        const EditData = {
            name: submittedInfo.name,
            email: submittedInfo.email,
            phone: submittedInfo.phone,
            last_order_at: submittedInfo.last_order_at,
            order_count: submittedInfo.order_count,
            birth_date: submittedInfo.birth_date,
            gender: submittedInfo.gender

        }

        console.log(EditData);
        let result = await putRequest(`customers/${id}`, EditData);
        // console.log('results', result);
        event.preventDefault();
    }
    return (

        <EditCustomersContainerWrapper key={'EditCustomersContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Edit Customer</Title>
                <TopMenu>
                    {submittedInfo.deleted_at == null ? <DeleteButton onClick={() => DeleteCustomer(submittedInfo.id)}>Delete</DeleteButton> : <RestoreButton onClick={() => RestoreCustomer(submittedInfo.id)}>Restore</RestoreButton>}
                    {editable == 'true' && <Edit onClick={toggleEdit}>Edit</Edit>}

                </TopMenu>

            </ContainerHeaderWrapper>
            {apiResults && apiResults.data ?

                <SubmitForm onSubmit={handleSubmit}>
                    <InputRow>
                        <label>
                            Name:
                <input type="text" value={submittedInfo.name || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'name': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>
                    <InputRow>
                        <label>
                            Email:
                <input type="email" value={submittedInfo.email || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'email': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>
                    <InputRow>
                        <label>
                            Phone:
                <input type="number" value={submittedInfo.phone || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'phone': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>

                    <InputRow>
                        <label>
                            Last Order:
                <input type="text" value={submittedInfo.last_order_at || 0} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'last_order_at': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>

                    <InputRow>
                        <label>
                            Order Count:
                <input type="number" value={submittedInfo.order_count || 0} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'order_count': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>

                    <InputRow>
                        <label>
                            Birth Date:
                <input type="text" value={submittedInfo.birth_date || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'birth_date': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>

                    <InputSelectRow>
                        <label>
                            Gender:
                            {
                                editable == 'false' ?
                                    <select select onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'gender': e.target.value })} required >
                                        <option value="1" >Male</option>
                                        <option value="2" >Female</option>
                                    </select>
                                    :

                                    <p>{submittedInfo.gender == 1 ? 'Male' : 'Female'}</p>

                            }

                        </label>
                    </InputSelectRow>


                    <InputRow>
                        <label>
                            Deleted  : {submittedInfo.deleted_at == null ? 'No' : 'Yes at ' + submittedInfo.deleted_at}
                        </label>
                    </InputRow>



                    {editable == 'false' && <button>Submit</button>}


                </SubmitForm>
                :
                <Loading />
            }
        </EditCustomersContainerWrapper >
    )
}

export default EditCustomer;