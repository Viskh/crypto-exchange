import type { RequestWithoutDataType } from "./api.types";
import { instance } from "./instance";

export const apiGet: RequestWithoutDataType = instance.get;
