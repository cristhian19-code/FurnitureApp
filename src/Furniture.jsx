import { Sidebar } from "./components/Navbar"
import { HomeSection } from "./components/home/HomeSection";
import { NewsSection } from "./components/new/NewsSection";
import { CaractServicesSection } from "./components/services/CaractServicesSection";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer/footer";
import { Loading } from "./components/Loading/Loading";

export const Furniture = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 8000);
    }, [])

    return (
        <div className={`flex flex-col relative ${!isOpen && 'bg-indigo-500 h-full justify-center items-center'}`}>
            
            {
                !isOpen ? (
                    <Loading />
                ) : (
                    <>
                        <Sidebar />
                        <main className="flex flex-col h-full bg-white mt-24 lg:mt-0 px-0 lg:px-5">
                            <HomeSection />
                            <NewsSection />
                            <CaractServicesSection />
                        </main>
                        <Footer/>
                    </>
                )
            }
        </div>
    )
}