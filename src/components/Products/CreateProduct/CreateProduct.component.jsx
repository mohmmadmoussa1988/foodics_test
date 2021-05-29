import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postRequest } from '../../../utils/requests';
import { AddButtonDiv, InputRow, SubmitForm, InputSelectRow } from './CreateProduct.styles';
import Error from '../../../components/error/error';
const CreateProduct = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [submittedInfo, setSubmittedInfo] = useState({});
    const [error, setError] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(submittedInfo);
        let result = await postRequest('products', submittedInfo);
        if (result.error) {
            setError("Error in product creation, please check with administrator");
        }


    }
    return (
        <AddButtonDiv>
            <Button variant="primary" onClick={handleShow}>
                Add New Product
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Error message={error} />}
                    <SubmitForm onSubmit={handleSubmit}>
                        <InputRow>
                            <label>
                                Name:
                                <input type="text" value={submittedInfo.name || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'name': e.target.value })} required />
                            </label>
                        </InputRow>
                        <InputRow>
                            <label>
                                SKU:
                                <input type="text" value={submittedInfo.sku || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'sku': e.target.value })} required />
                            </label>
                        </InputRow>
                        <InputRow>
                            <label>
                                Category ID:
                                <input type="number" value={submittedInfo.category_id || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'category_id': e.target.value })} />
                            </label>
                        </InputRow>

                        <InputSelectRow>
                            <label>
                                Pricing Method:
                            <select select onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'pricing_method': e.target.value })} required >
                                    <option value="" ></option>
                                    <option value="1" >Fixed</option>
                                    <option value="2" >Open</option>
                                </select>

                            </label>
                        </InputSelectRow>
                        {
                            submittedInfo.pricing_method == 1 ?
                                <InputRow>
                                    <label>
                                        Price:
                                <input type="number" value={submittedInfo.price || ''} onChange={(e) => setSubmittedInfo({ ...submittedInfo, 'price': e.target.value })} required />
                                    </label>
                                </InputRow>
                                :
                                ''
                        }
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

export default CreateProduct;