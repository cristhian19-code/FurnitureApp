import PhoneLineIcon from 'remixicon-react/PhoneLineIcon'
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon'
import HashtagIcon from 'remixicon-react/HashtagIcon'
import FacebookBoxLineIcon from 'remixicon-react/FacebookBoxLineIcon'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'

export const Footer = () => {
    return (
        <footer className="bg-indigo-600 py-16 px-10 text-white grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
            <ul className="text-md">
                <li className='text-2xl font-bold'>
                    Secciones
                </li>
                <li className='my-2 ml-5'>
                    <a href="#" className='flex items-center hover:underline hover:decoration-dotted hover:decoration-2'><HashtagIcon size={15}/> Inicio</a>
                </li>
                <li className='my-2 ml-5'>
                    <a href="#" className='flex items-center hover:underline hover:decoration-dotted hover:decoration-2'><HashtagIcon size={15}/> Nuevos</a>
                </li>
                <li className='my-2 ml-5'>
                    <a href="#" className='flex items-center hover:underline hover:decoration-dotted hover:decoration-2'><HashtagIcon size={15}/> Caracteristicas</a>
                </li>
            </ul>
            <ul className='text-md'>
                <li className='text-2xl font-bold'>Conocenos</li>
                <li className='my-2 ml-5'>
                    <a className='hover:underline hover:decoration-dotted hover:decoration-2' href="#">¿Quienes Somos?</a>
                </li>
                <li className='my-2 ml-5'>
                    <a className='hover:underline hover:decoration-dotted hover:decoration-2' href="#">Locales</a>
                </li>
                <li className='mt-2 ml-5'>
                    <a className='hover:underline hover:decoration-dotted hover:decoration-2' href="#">Terminos y Condiciones</a>
                </li>
                <li className='my-2 ml-5'>
                    <a className='hover:underline hover:decoration-dotted hover:decoration-2' href="#">libro de Reclamaciones</a>
                </li>
            </ul>
            <ul className='text-md'>
                <li className='text-2xl font-bold'>
                    Contactanos
                </li>
                <li className='ml-5 flex items-center cursor-pointer my-2 hover:underline hover:decoration-dotted hover:decoration-2'>
                    <PhoneLineIcon className='mr-1' size={17}/> +51 918 955 118
                </li>
                <li className='ml-5 flex items-center cursor-pointer my-2 hover:underline hover:decoration-dotted hover:decoration-2'>
                    <MapPinLineIcon className='mr-1' size={17}/> Mz C lote 8, Casa N° 1, Urb. La Esperanza
                </li>
                <li className='ml-5 flex items-center cursor-pointer my-2 hover:underline hover:decoration-dotted hover:decoration-2'>
                    <FacebookBoxLineIcon className='mr-1' size={17}/> FurnitureStore
                </li>
                <li className='ml-5 flex items-center cursor-pointer my-2 hover:underline hover:decoration-dotted hover:decoration-2'>
                    <InstagramLineIcon className='mr-1' size={17}/> FurnitureIG
                </li>
            </ul>
        </footer>
    )
}