import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { docsSocketClient } from "../../clients";
import { RemoteDoc } from "../../docs/types";

const docsSocketKey = "docs";
const docPublishingSocketKey = "docPublishing";
const docPublishedSocketKey = "docPublished";
const docPublishFailedSocketKey = "docPublishFailed";

type RemotePublishResult = Pick<RemoteDoc, "id" | "status">;

const useDocsSubscription = () => {
  const queryClient = useQueryClient();
  const docsQueryKey = "docs-list-key";

  const handleUpdateDocsList = (data: RemoteDoc[]) => {
    queryClient.setQueryData(docsQueryKey, data);
  };

  const updatePublishDoc = (publishResult: RemotePublishResult) => {
    queryClient.setQueryData<RemoteDoc[]>(docsQueryKey, (currentData = []) => {
      return currentData.map((doc) => {
        if (doc.id === publishResult.id) return { ...doc, ...publishResult };

        return doc;
      });
    });
  };

  useEffect(() => {
    docsSocketClient.on(docsSocketKey, handleUpdateDocsList);
    docsSocketClient.on(docPublishingSocketKey, updatePublishDoc);
    docsSocketClient.on(docPublishedSocketKey, updatePublishDoc);
    docsSocketClient.on(docPublishFailedSocketKey, updatePublishDoc);

    return () => {
      docsSocketClient.off(docsSocketKey, handleUpdateDocsList);
      docsSocketClient.off(docPublishingSocketKey, updatePublishDoc);
      docsSocketClient.off(docPublishedSocketKey, updatePublishDoc);
      docsSocketClient.off(docPublishFailedSocketKey, updatePublishDoc);
    };
  }, []);

  return docsQueryKey;
};

export default useDocsSubscription;
