import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postRequest } from '../../../utils/requests';
import { AddButtonDiv, InputRow, SubmitForm, TopButtons } from './CreateCategory.styles';
import { refreshPage } from '../../../utils/utils';
import { Link } from 'react-router-dom';
const CreateCategory = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [submittedInfo, setSubmittedInfo] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(submittedInfo);
        let result = await postRequest('categories', submittedInfo);
        console.log('results', result);

        refreshPage();

    }
    return (
        <AddButtonDiv>
            <TopButtons>
                <Button variant="primary" onClick={handleShow}>
                    Add New Category
            </Button>
                <Link to="/categories/sorting">Sorting</Link>
            </TopButtons>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SubmitForm onSubmit={handleSubmit}>
                        <InputRow>
                            <label>
                                Name:
                                <input type="text" value={submittedInfo.name || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'name': e.target.value })} required />
                            </label>
                        </InputRow>
                        <InputRow>
                            <label>
                                Reference:
                                <input type="text" value={submittedInfo.reference || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'reference': e.target.value })} required />
                            </label>
                        </InputRow>

                        <button>Submit</button>

                    </SubmitForm>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        </AddButtonDiv>
    )
}

export default CreateCategory;