"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailMenu from "./DetailMenu";
import BestSellerMenuSection from "@/components/sections/BestSellerMenuSection";



const queryClient = new QueryClient();
const DetailMenuSheel = () => {


    return (

        <QueryClientProvider client={queryClient}>
            <div className="w-full xl:w-1/2 mx-auto shadow-lg bg-white">
                <Header />
                <DetailMenu />
                <BestSellerMenuSection />
                <Footer />
            </div>
        </QueryClientProvider>
    )
}


export default DetailMenuSheel