"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import MenuSection from "../sections/MenuSection";
import BestSellerMenuSection from "../sections/BestSellerMenuSection";
import Footer from "./Footer";
import SearchSection from "../sections/SearchSection";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full min-h-auto xl:w-1/2 mx-auto shadow-lg bg-white">
        <Header />

        {children}

        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
