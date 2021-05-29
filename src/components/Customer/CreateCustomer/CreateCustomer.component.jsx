import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postRequest } from '../../../utils/requests';
import { AddButtonDiv, InputRow, SubmitForm } from './CreateCustomer.styles';
const CreateCustomer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [submittedInfo, setSubmittedInfo] = useState({});

    const handleSubmit = async (event) => {

        console.log(submittedInfo);
        let result = await postRequest('customers', submittedInfo);
        console.log('results', result);

        event.preventDefault();


    }
    return (
        <AddButtonDiv>
            <Button variant="primary" onClick={handleShow}>
                Add New Customer
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Customer</Modal.Title>
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
                                Email:
                                <input type="email" value={submittedInfo.email || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'email': e.target.value })} required />
                            </label>
                        </InputRow>
                        <InputRow>
                            <label>
                                Dial Code:
                                <input type="number" value={submittedInfo.dial_code || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'dial_code': e.target.value })} required />
                            </label>
                        </InputRow>
                        <InputRow>
                            <label>
                                Phone:
                                <input type="number" value={submittedInfo.phone || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'phone': e.target.value })} required />
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

export default CreateCustomer;