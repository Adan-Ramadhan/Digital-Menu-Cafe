"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import MenuSection from "../sections/MenuSection";
import BestSellerMenuSection from "../sections/BestSellerMenuSection";
import Footer from "./Footer";

const queryClient = new QueryClient();

const LandingPageSheel = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full xl:w-1/2 mx-auto shadow-lg bg-white">
        <Header />
        <BestSellerMenuSection />
        <MenuSection />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default LandingPageSheel;
