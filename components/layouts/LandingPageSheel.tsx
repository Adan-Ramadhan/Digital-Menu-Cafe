"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./Header"
import MenuSection from "../sections/MenuSection"

const queryClient = new QueryClient()

const LandingPageSheel = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-full xl:w-1/2 mx-auto">
                <Header />
                <MenuSection />
            </div>
        </QueryClientProvider >
    )
}

export default LandingPageSheel