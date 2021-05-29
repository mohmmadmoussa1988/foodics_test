import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const DataTable = ({ columns, data }) => {

    console.log('children', columns);

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    return (
        <MaterialTable
            title="List"
            columns={columns}
            data={data}
            options={{
                filtering: true,
                pagination: {}
            }}
        />
    )
}

export default DataTable;