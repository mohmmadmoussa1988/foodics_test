import React, { useState, useEffect } from 'react';
import { CategoriesContainerWrapper, ContainerHeaderWrapper } from './categories-container.styles';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import { fetchStartAsync } from '../../redux/app/app.actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/loading.component';
import InfiniteScroll from 'react-infinite-scroller';
import DataTable from '../../components/Table/Table.component';
import CreateCategory from '../../components/Categories/CreateCategory/CreateCategory.component';

const CategoriesContainer = () => {
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.Categories);
    const [results, setResults] = useState(apiResults);

    useEffect(() => {
        // To be called one time on load
        dispatch(fetchStartAsync('categories', null));
    }, []);
    useEffect(() => {
        console.log('apiResults', apiResults);
        if (apiResults && apiResults) {
            let results = apiResults;
            for (let row of results) {
                row.edit = 'edit/category/' + row.id;
                console.log('row', row);
            }
            setResults(results);
        }
    }, [apiResults]);


    const CategoriesColumns = [
        { title: 'Name', field: 'name' },
        { title: 'Reference', field: 'reference' },
        { title: 'Created Date', field: 'created_at' },
        { title: 'Edit', field: 'edit', render: rowData => <Link to={rowData.edit}>Edit</Link> },

    ];



    return (

        <CategoriesContainerWrapper key={'CustomersContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Categories</Title>
            </ContainerHeaderWrapper>
            <CreateCategory />
            {results.length > 0
                ?
                <DataTable columns={CategoriesColumns} data={results} key={'categorieRow_' + results.id} />
                :
                <Loading />

            }

        </CategoriesContainerWrapper >

    )
}

export default CategoriesContainer;