import { useState } from "react";
//modules
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import SwiperCore, { Autoplay, Navigation } from 'swiper';

//icons
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'

//images
import new1 from '../../assets/new/new1.png'
import new2 from '../../assets/new/new2.png'
import new3 from '../../assets/new/new3.png'
import new4 from '../../assets/new/new4.png'
import new5 from '../../assets/new/new5.png'

//css
import "swiper/css";
import "swiper/css/navigation"
import "../../styles/furniture.css"
import useWindowDimensions from "../../hooks/useWindowDimensions";


SwiperCore.use([Autoplay, Navigation]);

export const NewsSection = () => { 
    const { width } = useWindowDimensions();

    const [newfurnitures, setNewfurnitures] = useState([
        { img: new1, name: 'Sofa 1' },
        { img: new2, name: 'Sofa 2' },
        { img: new3, name: 'Sofa 3' },
        { img: new4, name: 'Sofa 4' },
        { img: new5, name: 'Sofa 5' }
    ])


    const [indexPreview, setIndexPreview] = useState(1)


    const handleIndexPreview = (e) => {
        const index = e.realIndex
        if (width>700) {
            setIndexPreview(index === newfurnitures.length - 1 ? 0 : index + 1)
        }else {
            setIndexPreview(index)
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">Nuevos Sofas</h1>
            <p className="text-xs mt-1 text-gray-400">perfecto para su sala o dormitorio</p>
            <Swiper className="h-full flex" navigation={true}
                onActiveIndexChange={handleIndexPreview}
                breakpoints={{
                    "0": {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    "700": {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{
                "delay": 4000,
                "disableOnInteraction": false,
            }} loop={true}>
                {
                    newfurnitures.map((item, index) => (
                        <SwiperSlide className={`relative flex flex-col items-center justify-center ${indexPreview === index && 'h-full'}`} key={index}>
                            <div className="absolute flex justify-center items-center top-10 left-10 text-white h-10 w-20 bg-yellow-500">
                                New
                            </div>
                            <img className={`transition-all h-64 ${indexPreview === index && 'h-80'}`} src={item.img} alt="" />
                            {
                                indexPreview === index && (
                                    <div className="transition-all">
                                        <p className="text-2xl text-center text-gray-600 mb-2 font-bold">{item.name}</p>
                                        <button className="bg-indigo-700 px-10 py-2 text-white rounded-full flex items-center">
                                            Ver
                                            <motion.div
                                                className="ml-1"
                                                initial={{ x: 0 }}
                                                animate={{ x: 10 }}
                                                transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
                                            >
                                                <ArrowRightLineIcon size={15} />
                                            </motion.div>
                                        </button>
                                    </div>
                                )
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}