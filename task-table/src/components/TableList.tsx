import { useFetchData } from '@/services/fetchData';
import { useFetchHeader } from '@/services/fetchHeader';
import React from 'react';

const TableList = () => {

    const [header] = useFetchHeader();
    const [data] = useFetchData();

    return (
        <div>TableList</div>
    )
}

export default TableList