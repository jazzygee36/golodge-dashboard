"use client";

import { queryClient } from "@/lib/queries";
import { QueryClientProvider } from "@tanstack/react-query";

export function LayoutClient({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
    }