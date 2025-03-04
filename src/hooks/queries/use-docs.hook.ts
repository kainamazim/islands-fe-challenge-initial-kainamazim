import { useQuery } from "react-query";
import useDocsSubscription from "./use-docs.subscription.hook";
import { RemoteDoc } from "../../docs/types";
import { httpClient } from "../../clients";

const useDocs = () => {
  const docsQueryKey = useDocsSubscription();

  const result = useQuery<RemoteDoc[]>({
    queryKey: docsQueryKey,
    queryFn: async () => {
      const axiosResponse = await httpClient.get("/docs");
      return axiosResponse.data;
    },
  });

  return result;
};

export default useDocs;
