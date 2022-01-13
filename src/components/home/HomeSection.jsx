import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import BankCardLineIcon from 'remixicon-react/BankCardLineIcon'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'

//imagenes
import sofa1 from '../../assets/portada/sofa1.png'
import sofa2 from '../../assets/portada/sofa2.png'
import sofa3 from '../../assets/portada/sofa3.png'
import sofa4 from '../../assets/portada/sofa4.png'

import "swiper/css";
import { useState } from "react";

SwiperCore.use([Autoplay]);


export const HomeSection = () => { 
    const [furnitures, setFurnitures] = useState([
        sofa1,
        sofa2,
        sofa3,
        sofa4
    ])
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full mb-20 lg:mb-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-start justify-center px-10 select-none">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600">FurnitureApp</h1>
                <h2 className="mt-3 text-sm md:text-md lg:text-lg text-gray-400 font-medium">Personaliza tu mueble a tu gusto con una gran gama de colores y texturas para relucir sus interiores.</h2>
                <button className="mt-3 flex items-center rounded-full px-6 py-3 transition-colors duration-100 shadow-md shadow-indigo-500/50 bg-indigo-600 hover:bg-indigo-500 text-white">Personalizar <ArrowRightLineIcon className="ml-1" size={18} /></button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center justify-center">
                <Swiper loop={true} spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                }} className="mySwiper">
                    {
                        furnitures.map((item, index) => (
                            <SwiperSlide key={index} className="flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <img className="h-52 md:h-64 lg:h-80" src={item} alt="mueble" />
                                </div>
                                <div className="text-center mb-4">
                                    <h1 className="text-2xl font-light text-gray-500">Chair Upholstery <span className="text-indigo-600 text-sm font-bold">$450.48</span></h1>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <button className="bg-indigo-600 transition-colors duration-100 hover:bg-indigo-500 text-white text-lg px-7 py-2 rounded-full flex items-center">Comprar <BankCardLineIcon className="ml-1" size={17} /> </button>
                                    <button className="text-gray-400 px-4 py-1 bg-gray-200 rounded-full text-sm">Ver detaller</button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </motion.div>
        </div>
    )
}