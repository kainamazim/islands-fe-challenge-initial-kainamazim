import { RemoteDoc } from "./types";

export interface DocProps {
  data: RemoteDoc;
}

export const Doc = ({ data }: DocProps) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>
        <strong>
          <em>{data.status}</em>
        </strong>
      </td>
      <td>
        <button>Publish</button>
      </td>
    </tr>
  );
};
