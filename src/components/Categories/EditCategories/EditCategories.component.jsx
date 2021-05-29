import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { putRequest, deleteRequest } from '../../../utils/requests';
import { refreshPage } from '../../../utils/utils';
import Title from '../../Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStartAsync, clearApiResults } from '../../../redux/app/app.actions';
import Loading from '../../loading/loading.component';
import { AddButtonDiv, InputRow, SubmitForm, EditCategoryContainerWrapper, ContainerHeaderWrapper, RestoreButton, Edit, InputSelectRow, TopMenu, DeleteButton } from './EditCategories.styles';
const EditCategory = () => {
    let { id } = useParams();
    const [submittedInfo, setSubmittedInfo] = useState({});
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const [results, setResults] = useState(apiResults);
    const [editable, setEditable] = useState('true');
    const [editableInput, setEditableInput] = useState(true);



    useEffect(() => {
        // To be called one time on load
        dispatch(fetchStartAsync(`categories/${id}`, null));
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
        await deleteRequest('categories/' + id);
        refreshPage();
    }

    const RestoreCustomer = async (id) => {
        await putRequest('categories/' + id + '/restore', {});
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
        let result = await putRequest(`categories/${id}`, EditData);
        // console.log('results', result);
        event.preventDefault();
    }
    return (

        <EditCategoryContainerWrapper key={'EditCategoryContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Edit Category</Title>
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
                            Reference:
                <input type="text" value={submittedInfo.reference || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'reference': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>





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
        </EditCategoryContainerWrapper >
    )
}

export default EditCategory;