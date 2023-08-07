import { baseAxios } from "@/utils/baseAxios";
import { DataArray } from "@/utils/types";
import { useQuery } from '@tanstack/react-query';

export const fetchData = async () => {
    const { data } = await baseAxios.get<DataArray[]>("data");
    return data
}

export const useFetchData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["data"],
        initialData: []
    })

    return [query.data, query] as const
}