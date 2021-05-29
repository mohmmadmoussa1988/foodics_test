import React, { useState, useEffect, useContext } from 'react';
import { CategoriesContainerWrapper, ContainerHeaderWrapper } from './categories-sorting.styles';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import { putRequest } from '../../utils/requests';
import { fetchStartAsync } from '../../redux/app/app.actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/loading.component';
import InfiniteScroll from 'react-infinite-scroller';
import CategoryGrid from '../../components/Categories/CategoryGrid/CategoryGrid.component';
import CreateCategory from '../../components/Categories/CreateCategory/CreateCategory.component';
import DragItem from "../grid/DragItem";
import { Grid, GridImage, GridItem } from "../grid/Grid";
import GridContext from "../grid/GridContext";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { GridProvider } from "../grid/GridContext";

const CategoriesSorting = () => {
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.Categories);
    const menuDisplay = useSelector(state => state.app.Menu_display);
    const [results, setResults] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [sortedList, setSortedList] = useState(false);

    useEffect(async () => {
        console.log('updateList', updateList);
        if (updateList) {
            let category_id = [];
            for (let row of results) {
                category_id.push({ category_id: row.id });
            }
            category_id = { categories: category_id };
            console.log(JSON.stringify(category_id));
            let requestSent = await putRequest('menu_display', category_id);
            console.log('requestSent', requestSent);
            setUpdateList(false);
        }
    }, [updateList]);

    useEffect(() => {
        dispatch(fetchStartAsync('categories', apiResults.page));
        dispatch(fetchStartAsync('menu_display', null));



    }, []);


    useEffect(() => {
        //  console.log(menuDisplay.length, results.length, sortedList);
        if (menuDisplay.length > 0 && results.length > 0 && sortedList == false) {
            console.log('start sorting');
            let sortedResults = [];
            for (let row of menuDisplay) {
                let rowResult = results.find(({ id }) => id === row['category_id']);
                sortedResults.push(rowResult);
            }
            setResults(sortedResults);
            console.log('sorted array', sortedResults);
            setSortedList(true);
        }

    });





    useEffect(() => {
        console.log('1', results.length, apiResults);
        if (results.length == 0) {
            console.log('results defined')
            if (apiResults && apiResults) {
                let results = apiResults;
                for (let row of results) {
                    row.edit = 'edit/category/' + row.id;
                }
                setResults(results);
                console.log('2');
            }
        }


    }, [apiResults]);



    const moveItem = (sourceId, destinationId) => {
        const sourceIndex = results.findIndex(
            (item) => item.id === sourceId
        );
        const destinationIndex = results.findIndex(
            (item) => item.id === destinationId
        );
        if (sourceId === -1 || destinationId === -1) {
            return;
        }
        const offset = destinationIndex - sourceIndex;
        let newResults = results;
        let arraysourceElement = newResults[sourceIndex];
        let arraydestiElement = newResults[destinationIndex];
        newResults[sourceIndex] = newResults[destinationIndex];
        newResults[destinationIndex] = arraysourceElement;
        setResults([{ id: 0 }]);
        console.log('newResults', newResults);
        setResults(newResults);
        setTimeout(() => setUpdateList(true), 1000);

    };



    return (

        <CategoriesContainerWrapper key={'CustomersContainerWrapper'}>
            <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                <Title key={'title_key'}>Categories Sorting</Title>
            </ContainerHeaderWrapper>
            <DndProvider backend={HTML5Backend} >
                <GridProvider >
                    {results.length > 0
                        ?

                        <Grid>
                            {results.map(item => {
                                return (
                                    <DragItem key={item.id} id={item.id} onMoveItem={moveItem} >
                                        <GridItem>
                                            <CategoryGrid data={item} />
                                        </GridItem>
                                    </DragItem>
                                )
                            }

                            )}
                        </Grid>

                        :
                        <Loading />

                    }
                </GridProvider>
            </DndProvider>
        </CategoriesContainerWrapper >

    )
}

export default CategoriesSorting;