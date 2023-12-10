import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestWithoutDataType = <
  Response extends null | object = Record<string, unknown>,
  Data extends object = Record<string, unknown>,
  Params = Record<string, unknown>,
>(
  url: string,
  config?: Omit<AxiosRequestConfig<Data>, "params"> & { params?: Params },
) => Promise<AxiosResponse<Response, Data>>;
