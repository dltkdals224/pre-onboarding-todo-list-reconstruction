import { QueryClient, QueryClientProvider } from "react-query";

import Routers from "./routers";

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
