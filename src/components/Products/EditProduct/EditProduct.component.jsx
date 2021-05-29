import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { putRequest, deleteRequest } from '../../../utils/requests';
import { refreshPage } from '../../../utils/utils';
import Title from '../../Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStartAsync } from '../../../redux/app/app.actions';
import Loading from '../../loading/loading.component';
import Error from '../../../components/error/error';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import { AddButtonDiv, InputRow, SubmitForm, EditProductsContainerWrapper, ContainerHeaderWrapper, RestoreButton, Edit, InputSelectRow, TopMenu, DeleteButton } from './EditProduct.styles';
const EditProduct = () => {
    let { id } = useParams();
    const [submittedInfo, setSubmittedInfo] = useState();
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const apiCategories = useSelector(state => state.app.Categories);
    const [results, setResults] = useState(apiResults);
    const [editable, setEditable] = useState('true');
    const [editableInput, setEditableInput] = useState(true);

    useEffect(() => {
        // To be called one time on load
        dispatch(fetchStartAsync(`products/${id}`, null));
        dispatch(fetchStartAsync(`categories`, null));

    }, []);


    useEffect(() => {
        console.log('apiResults', apiResults);
        console.log('submittedInfo', submittedInfo);
        if (apiResults && apiResults.data && !submittedInfo) {
            console.log('inserting to submittedinfo', apiResults.data.data);
            setSubmittedInfo(apiResults.data.data);
        }

    });

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

    const DeleteProduct = async (id) => {
        await deleteRequest('products/' + id);
        refreshPage();
    }

    const RestoreProduct = async (id) => {
        await putRequest('products/' + id + '/restore', {});
        refreshPage();
    }


    const handleSubmit = async (event) => {
        console.log(submittedInfo);
        event.preventDefault();
        let is_active;
        console.log('submittedInfo.is_active', submittedInfo.is_active);
        if (submittedInfo.is_active == true) { is_active = true; } else { is_active = false; }

        const EditData = {
            name: submittedInfo.name,
            sku: submittedInfo.sku,
            category_id: submittedInfo.category.id,
            pricing_method: submittedInfo.pricing_method,
            price: submittedInfo.price,
            is_active: is_active

        }

        console.log("EditData", EditData);
        let result = await putRequest(`products/${id}`, EditData);
        // console.log('results', result);

    }
    return (

        <EditProductsContainerWrapper key={'EditProductsContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Edit Product</Title>
                <TopMenu>
                    {submittedInfo && submittedInfo.deleted_at == null ? <DeleteButton onClick={() => DeleteProduct(submittedInfo.id)}>Delete</DeleteButton> : <RestoreButton onClick={() => RestoreProduct(submittedInfo.id)}>Restore</RestoreButton>}
                    {editable == 'true' && <Edit onClick={toggleEdit}>Edit</Edit>}

                </TopMenu>

            </ContainerHeaderWrapper>
            {submittedInfo ?
                <SubmitForm SubmitForm onSubmit={handleSubmit}>
                    <InputRow>
                        <label>
                            Name:
                <input type="text" value={submittedInfo.name || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'name': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>
                    <InputRow>
                        <label>
                            SKU:
                <input type="text" value={submittedInfo.sku || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'sku': e.target.value })} required readOnly={editableInput} />
                        </label>
                    </InputRow>
                    <InputSelectRow>
                        <label>
                            Category ID:
                            <select onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'category': { 'id': e.target.value } })} value={submittedInfo.category.id} disabled={editableInput} required >

                                {(apiCategories).map(category => <option value={category.id} key={'category_id+' + category.id} >{category.name}</option>)}

                            </select>


                        </label>
                    </InputSelectRow>






                    <InputSelectRow>
                        <label>
                            Pricing Method:
                            {
                                editable == 'false' ?
                                    <select select onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'pricing_method': e.target.value })} required readOnly={editableInput}>
                                        <option value="1" >Fixed</option>
                                        <option value="2" >Open</option>
                                    </select>
                                    :

                                    <p>{submittedInfo.pricing_method == 1 ? 'Fixed' : 'Open'}</p>

                            }

                        </label>
                    </InputSelectRow>
                    {
                        submittedInfo.pricing_method == 1 ?
                            <InputRow>
                                <label>
                                    Price:
                                <input type="number" value={submittedInfo.price || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'price': e.target.value })} required readOnly={editableInput} />
                                </label>
                            </InputRow>
                            :
                            ''
                    }

                    <InputRow>
                        <label>
                            Deleted  : {submittedInfo.deleted_at == null ? 'No' : 'Yes at ' + submittedInfo.deleted_at}
                        </label>
                    </InputRow>

                    <InputRow>
                        <label>
                            active  :
                            {submittedInfo.is_active == true ?
                                <Toggle
                                    id='activate'
                                    onChange={(e) => { console.log('toggle', e.target.checked); setSubmittedInfo({ ...submittedInfo, 'is_active': e.target.checked }) }}
                                    defaultChecked={true}
                                    disabled={editableInput}
                                />

                                :
                                <Toggle
                                    id='activate'
                                    onChange={(e) => { console.log('toggle', e.target.checked); setSubmittedInfo({ ...submittedInfo, 'is_active': e.target.checked }) }}
                                    defaultChecked={false}
                                    disabled={editableInput}
                                />
                            }

                        </label>
                    </InputRow>



                    {editable == 'false' && <button>Submit</button>}


                </SubmitForm>
                :
                <Loading />
            }
        </EditProductsContainerWrapper >
    )
}

export default EditProduct;