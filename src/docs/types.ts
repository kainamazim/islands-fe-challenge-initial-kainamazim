export interface RemoteDoc {
  id: string;
  name: string;
  status: "draft" | "publishing" | "published" | "failed";
}
