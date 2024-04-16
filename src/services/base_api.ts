import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Serializer, { DeserializerOptions } from 'jsonapi-serializer';
import qs from 'qs';
import { LoadingBar } from 'quasar';
import { useAuthStore } from '@/store/auth';
import { isBlank } from '@/utils/lang.ts';
import { snakeToCamelCase } from '@/utils/object';

const Deserializer = Serializer.Deserializer;

axios.interceptors.request.use((config): InternalAxiosRequestConfig<any> => {
  LoadingBar.start();
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    LoadingBar.stop();
    return response;
  },
  (error: AxiosError) => {
    LoadingBar.stop();
    return Promise.reject(error);
  }
);

export const backendAPI = (
  method: string,
  path: string,
  data: any = {},
  headers: any = {},
  responseType: any = null,
  options: any = {}
): Promise<AxiosResponse> => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    requester(method, path, data, headers, responseType)
      .then((resp: AxiosResponse) => {
        if (resp.status === 200 || resp.status === 201) {
          if (optionBuilder(options).isJonApi) {
            const metaData = resp.data.meta;
            jsonDeserializer(resp.data).then((data: any) => {
              const objectData: any = {
                data: data,
                metaData: snakeToCamelCase(metaData),
              };
              resolve(objectData);
            });
          } else {
            resolve(snakeToCamelCase(resp));
          }
        }
      })
      .catch((error: any) => {
        reject(axiosErrorParse(error));
      });
  });
};

// PRIVATE
const optionBuilder = (options: any) => {
  return {
    isJonApi: true,
    ...options,
  };
};

const axiosErrorParse = (error: AxiosError) => {
  return error.response?.data;
};

const jsonDeserializer = (jsonData: any) => {
  const options = { keyForAttribute: 'camelCase' } as DeserializerOptions;
  return Promise.resolve(new Deserializer(options).deserialize(jsonData, (_err, data) => data));
};

const requester = (
  method: string,
  path: string,
  data: any = {},
  headers: any = {},
  responseType: any = null
): Promise<AxiosResponse> => {
  // Attach tokens to headers
  headers = attachBearToken(headers);

  const axiosDefaultSetting = defaultAxiosDefaultSetting(method, path, data, headers, responseType);

  return axios(axiosDefaultSetting);
};

const attachBearToken = (headers: any): any => {
  const userStore = useAuthStore();
  const user = userStore.getCurrentUser;
  const userToken = user?.token;
  if (isBlank(userToken)) return headers;
  if (headers.attachUserToken === false) return headers;

  return {
    ...headers,
    'X-User-Token': userToken,
  };
};

const defaultAxiosDefaultSetting = (
  method: string,
  path: string,
  data: any = {},
  headers: any = {},
  responseType: any = null
): AxiosRequestConfig => {
  const axiosSetting: AxiosRequestConfig = {
    method: method,
    url: import.meta.env.VITE_APP_BACKEND_END_POINT + path,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // Set request parameter or body
  if (method.toLowerCase() == 'get') {
    axiosSetting.params = data;
    axiosSetting.paramsSerializer = (params) => {
      return qs.stringify(params);
    };
  } else {
    axiosSetting.data = data;
  }

  if (responseType) {
    axiosSetting.responseType = responseType;
  }

  return axiosSetting;
};
