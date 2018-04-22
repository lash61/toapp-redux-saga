import apiFactory, {IApiService} from './api';

export interface IServiceMap {
    apiService: IApiService
}

const serviceMapFactory = (): IServiceMap => {
    return {
        apiService: apiFactory()
    };
};

export default serviceMapFactory;
