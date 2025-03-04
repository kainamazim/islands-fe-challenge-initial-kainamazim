import { RemoteDoc } from "./types";

import { usePublishDoc } from "../hooks";
import { FC } from "react";

export interface PublishDocBtnProps {
  docId: RemoteDoc["id"];
  isDisabled: boolean;
}

export const PublishDocBtn: FC<PublishDocBtnProps> = ({
  docId,
  isDisabled,
}) => {
  const publishDoc = usePublishDoc();

  const handlePublish = () => {
    publishDoc(docId);
  };

  return (
    <button onClick={handlePublish} disabled={isDisabled}>
      Publish
    </button>
  );
};
