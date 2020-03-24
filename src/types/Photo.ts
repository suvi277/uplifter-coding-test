export interface Photo {
    title: string;
    ownername: string;
    description: {
        _content: string;
    };
    url_q: string;
    owner: string;
    id: string;
    tags: string;
}

interface ServiceLoading {
    status: string;
}

interface ServiceLoaded<Photo> {
    status: string;
    photos?: Array<Photo>;
}

interface ServiceError {
    status: string;
    error?: Error;
}

export interface BaseAction {
    type: string;
    payload?: any;
}

export type PhotoCollection<T> = ServiceLoading | ServiceLoaded<T> | ServiceError;
