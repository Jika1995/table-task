import { baseAxios } from "@/utils/baseAxios";
import { HeaderObj } from "@/utils/types";
import { useQuery } from '@tanstack/react-query';

export const fetchHeader = async () => {
    const { data } = await baseAxios.get<HeaderObj[]>("header");
    return data
}

export const useFetchHeader = () => {
    const query = useQuery({
        queryFn: fetchHeader,
        queryKey: ["header"],
        initialData: []
    })

    return [query.data, query] as const
}