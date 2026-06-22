import { MOCK_SUBJECTS } from "@/constants/mock-data";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => {
    throw new Error("THis Function is not present in Mock");
  },
  create: async () => {
    throw new Error("THis Function is not present in Mock");
  },
  update: async () => {
    throw new Error("THis Function is not present in Mock");
  },
  deleteOne: async () => {
    throw new Error("THis Function is not present in Mock");
  },

  getApiUrl: () => "",
};
