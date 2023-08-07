export type HeaderObj = {
    id: string;
    type: string;
    caption: string;
    align?: string
}

export type DataArray = [
    string,
    number,
    string,
    number,
    number | {
        d: number;
        color: string
    }
]