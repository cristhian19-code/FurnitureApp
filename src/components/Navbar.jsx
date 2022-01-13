import WhatsappLineIcon from 'remixicon-react/WhatsappLineIcon'
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const Sidebar = () => { 
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`fixed flex flex-col md:flex-row justify-between items-center transition-all duration-200 w-80 md:w-full md:h-auto h-full md:translate-x-0  ${!isOpen && '-translate-x-full'} bg-white/90 text-indigo-600 py-6 px-4 z-10`}>
            <h1 className="text-2xl font-bold">FurnitureApp</h1>
            <button onClick={handleToggle} className='absolute top-7 -right-14 bg-indigo-600 text-white p-1 rounded-xl'>
                {
                    isOpen ? <CloseLineIcon size={35}/> : <MenuLineIcon size={35}/>    
                }
            </button>
            <ul className="flex flex-col md:flex-row gap-5 text-lg font-medium">
                <li className="cursor-pointer hover:underline hover:decoration-dotted hover:decoration-2 hover:text-indigo-500/70">Categorias</li>
                <li className="cursor-pointer hover:underline hover:decoration-dotted hover:decoration-2 hover:text-indigo-500/70">Contactanos</li>
                <li className="cursor-pointer hover:underline hover:decoration-dotted hover:decoration-2 hover:text-indigo-500/70">Nosotros</li>
            </ul>
            <ul className="flex gap-3">
                <motion.li
                    whileHover={{ scale: 1.3 }}
                    className='cursor-pointer'>
                    <WhatsappLineIcon className='text-green-500' />
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.3 }}
                    className='cursor-pointer'>
                    <FacebookFillIcon className='text-blue-600' />
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.3 }}
                    className='cursor-pointer'>
                    <LinkedinFillIcon className='text-blue-800' />
                </motion.li>
            </ul>
        </nav>
    )
}