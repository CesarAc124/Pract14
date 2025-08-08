"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";




export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL no está definida");
  }
  const convex = new ConvexReactClient(convexUrl);
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}