import React, { useState, useEffect } from 'react';
import { CustomersContainerWrapper, ContainerHeaderWrapper } from './customers-container.styles';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import { fetchStartAsync, clearApiResults } from '../../redux/app/app.actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/loading.component';
import InfiniteScroll from 'react-infinite-scroller';
import DataTable from '../../components/Table/Table.component';
import CreateCustomer from '../../components/Customer/CreateCustomer/CreateCustomer.component';

const CustomersContainer = () => {
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const [results, setResults] = useState(apiResults);

    useEffect(() => {
        // To be called oe time on load
        dispatch(fetchStartAsync('customers', apiResults.page));

    }, []);

    useEffect(() => {
        console.log('apiResults', apiResults);
        if (apiResults && apiResults.data) {
            let results = apiResults.data.data;
            for (let row of results) {
                row.edit = 'edit/customer/' + row.id;
                console.log('row', row);
            }
            setResults(results);
        }
    }, [apiResults]);


    const CustomersColumns = [
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone', type: 'numeric' },
        { title: 'Last Order', field: 'last_order_at' },
        { title: 'Edit', field: 'edit', render: rowData => <Link to={rowData.edit}>Edit</Link> },

    ];



    return (

        <CustomersContainerWrapper key={'CustomersContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Customers</Title>
            </ContainerHeaderWrapper>
            <CreateCustomer />
            {results.length > 0
                ?
                <DataTable columns={CustomersColumns} data={results} />
                :
                <Loading />

            }

        </CustomersContainerWrapper >

    )
}

export default CustomersContainer;