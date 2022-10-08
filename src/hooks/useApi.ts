import useSWR from "swr";
import { api } from "../services/api";

export function useApi(url: string) {
  const { data } = useSWR(url, async (url) => {
    const { data } = await api.get(url);

    return data;
  },{
    refreshInterval: 1000
  });

  return { data };
}
