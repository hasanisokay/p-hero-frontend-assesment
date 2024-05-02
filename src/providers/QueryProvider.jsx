'use client'
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
const QueryProvider = ({ children }) => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate>
                {children}
            </Hydrate>
        </QueryClientProvider>
    );
};

export default QueryProvider;