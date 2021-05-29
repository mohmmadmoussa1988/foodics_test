import React, { useState, useEffect } from 'react';
import { ProductsContainerWrapper, ContainerHeaderWrapper } from './products-container.styles';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import { fetchStartAsync } from '../../redux/app/app.actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/loading.component';
import InfiniteScroll from 'react-infinite-scroller';
import DataTable from '../../components/Table/Table.component';
import CreateProduct from '../../components/Products/CreateProduct/CreateProduct.component';
const ProductsContainer = () => {
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const [results, setResults] = useState(apiResults);

    useEffect(() => {
        // To be called one time on load
        dispatch(fetchStartAsync('products', apiResults.page));
    }, []);
    useEffect(() => {
        console.log('apiResults', apiResults);
        if (apiResults && apiResults.data && results) {
            let results = apiResults.data.data;
            for (let row of results) {
                row.edit = 'edit/products/' + row.id;
                console.log('row', row);
            }
            setResults(results);
        }
    }, [apiResults]);


    const ProductsColumns = [
        { title: 'Name', field: 'name' },
        { title: 'SKU', field: 'sku' },
        { title: 'Category', field: 'category_id' },
        { title: 'Pricing Method', field: 'pricing_method', render: rowData => rowData.pricing_method == 1 ? 'Fixed' : 'Open' },
        { title: 'Price', field: 'price', render: rowData => rowData.pricing_method == 1 ? rowData.price : '' },
        { title: 'Edit', field: 'edit', render: rowData => <Link to={rowData.edit}>Edit</Link> },

    ];



    return (

        <ProductsContainerWrapper key={'ProductsContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Products</Title>
            </ContainerHeaderWrapper>
            <CreateProduct />
            {results.length > 0
                ?
                <DataTable columns={ProductsColumns} data={results} />
                :
                <Loading />

            }

        </ProductsContainerWrapper >

    )
}

export default ProductsContainer;