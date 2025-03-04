import { RemoteDoc } from "./types";

import { useRetryDoc } from "../hooks";
import { FC } from "react";

export interface RetryDocBtnProps {
  docId: RemoteDoc["id"];
  isDisabled: boolean;
}

export const RetryDocBtn: FC<RetryDocBtnProps> = ({ docId, isDisabled }) => {
  const retryDoc = useRetryDoc();

  const handleRetry = () => {
    retryDoc(docId);
  };

  return (
    <button onClick={handleRetry} disabled={isDisabled}>
      Retry
    </button>
  );
};
