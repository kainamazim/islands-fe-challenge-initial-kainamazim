import { Doc } from "./doc.component";

export const DocList = () => {
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
        <Doc data={{ id: "1", name: "Some Doc", status: "draft" }} />
        <Doc data={{ id: "2", name: "Some Doc 2", status: "failed" }} />
      </tbody>
    </table>
  );
};
