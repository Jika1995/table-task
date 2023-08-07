import { useFetchReportById } from '@/services/fetchReportById';
import { Container, Group, Loader, ScrollArea, Stack, Table, Text } from '@mantine/core';
import React from 'react';

type Props = {
    reportId: string | null
}

const TableList = ({ reportId }: Props) => {

    const [report] = useFetchReportById({ id: reportId ?? '' }, { enabled: Boolean(reportId) })

    const rows = report?.data.map((element, elemIdx) => (
        <tr key={elemIdx} className="duration-300 cursor-pointer bg-cyan-100 hover:bg-cyan-50 hover:scale-105">
            {element.map((item, itemIdx) => (
                <td key={itemIdx} className='py-3 px-6 font-semibold w-44 '>{typeof item === 'object' ? item.d : item}</td>
            ))}
        </tr>
    ));

    return (
        <ScrollArea>
            <Stack>

                <table className='table-fixed shadow-xl border-2 border-cyan-900 divide-solid divide-gray-200 overflow-hidden ' >
                    <thead className='text-white bg-cyan-800'>
                        <tr>
                            {
                                report?.header.map((item) => (
                                    <th
                                        className={item.align ? `text-${item.align} p-4 whitespace-nowrap w-44` : 'p-4 whitespace-nowrap w-44'}
                                        key={item.id}
                                    >{item.caption}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className=' text-cyan-900 divide-y divide-gray-200 '>{rows}</tbody>
                </table>
            </Stack>
        </ScrollArea>
    )
}

export default TableList