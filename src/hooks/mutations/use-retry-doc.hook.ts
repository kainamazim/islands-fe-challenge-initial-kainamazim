import { useMutation } from "react-query";
import { httpClient } from "../../clients";

const useRetryDoc = () => {
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await httpClient.post(`/docs/${id}/retry`);
    },
  });

  return mutate;
};

export default useRetryDoc;
