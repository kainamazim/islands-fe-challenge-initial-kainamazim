import { useMutation } from "react-query";
import { httpClient } from "../../clients";

const usePublishDoc = () => {
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await httpClient.post(`/docs/${id}/publish`);
    },
  });

  return mutate;
};

export default usePublishDoc;
