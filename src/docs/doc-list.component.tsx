import { useDocs } from "../hooks";
import { Doc } from "./doc.component";

export const DocList = () => {
  const { data = [] } = useDocs();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((doc) => (
          <Doc key={doc.id} data={doc} />
        ))}
      </tbody>
    </table>
  );
};
