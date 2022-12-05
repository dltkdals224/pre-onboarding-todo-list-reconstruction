import Routers from "./routers";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

function App() {
  return (
    <div className="App">
      <div className="page">
        <QueryClientProvider client={queryClient}>
          <Routers />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
