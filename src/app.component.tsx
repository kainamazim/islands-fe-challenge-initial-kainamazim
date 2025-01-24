import { QueryClientProvider, QueryClient } from "react-query";
import { DocList } from "./docs";
import { ResetButton } from "./reset-button.component";
import { SocketDemo } from "./socket-demo.component";

export const App = () => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
    }
  >
    <div className="App">
      <SocketDemo />
      <div style={{ marginTop: "10px" }}>
        <ResetButton />
      </div>
      <h1>Docs</h1>
      <div>
        <DocList />
      </div>
    </div>
  </QueryClientProvider>
);
