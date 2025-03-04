import { RemoteDoc } from "./types";
import { RetryDocBtn } from "./retry-doc-btn.component";
import { PublishDocBtn } from "./publish-doc-btn.component";
import { FC } from "react";

export interface DocProps {
  data: RemoteDoc;
}

export const Doc: FC<DocProps> = ({ data: { id, name, status } }) => {
  const isBtnDisabled = status === "publishing" || status === "published";

  return (
    <tr>
      <td>{name}</td>
      <td>
        <strong>
          <em>{status}</em>
        </strong>
      </td>
      <td>
        {status === "failed" ? (
          <RetryDocBtn docId={id} isDisabled={isBtnDisabled} />
        ) : (
          <PublishDocBtn docId={id} isDisabled={isBtnDisabled} />
        )}
      </td>
    </tr>
  );
};
