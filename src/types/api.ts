

export type FetchResponse<T> = {
    data: T | null;
    isLoading: boolean;
    isError: any;
};