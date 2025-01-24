import { useMutation } from "react-query";
import { httpClient } from "./clients";

export const ResetButton = () => {
  const { mutate: reset, isLoading: isResetting } = useMutation(async () => {
    await httpClient.post("/docs/reset");
    window.location.reload();
  });

  return (
    <button disabled={isResetting} onClick={() => reset()}>
      {isResetting ? "Resetting..." : "Reset Data"}
    </button>
  );
};
