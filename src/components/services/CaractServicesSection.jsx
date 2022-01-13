//iconos
import SecurePaymentFillIcon from 'remixicon-react/SecurePaymentFillIcon'
import TruckLineIcon from 'remixicon-react/TruckLineIcon'
import hour24 from '../../assets/icon/hours.svg'

export const CaractServicesSection = () => { 
    return (
        <div className="w-full h-auto lg:h-screen flex flex-col justify-center items-center gap-10 pb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-10 text-center">Caracteristicas de nuestro servicio</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-3">
                <div className='mb-8 lg:mb-0 px-20'>
                    <div className="flex items-center justify-center">
                        <TruckLineIcon className="text-indigo-600" size={100} />
                    </div>
                    <h1 className="text-gray-600 font-bold text-2xl text-center mb-2">Delivery veloz</h1>
                    <p className="font-medium text-sm text-gray-500 text-center">
                        Llegamos a tu casa en unos minutos y te entregamos el producto en una sola entrega.
                    </p>
                </div>
                <div className='mb-8 lg:mb-0 px-20'>
                    <div className="flex items-center justify-center">
                        <SecurePaymentFillIcon className="text-indigo-600" size={100} />
                    </div>
                    <h1 className="text-gray-600 font-bold text-2xl text-center mb-2">Pago seguro</h1>
                    <p className="font-medium text-sm text-gray-500 text-center">
                        Realizar tu pago en nuestra plataforma es muy seguro, no tendrás que preocuparte por nada.
                    </p>
                </div>
                <div className='mb-8 lg:mb-0  px-20'>
                    <div className="flex items-center justify-center">
                        <img src={hour24} alt="" />
                    </div>
                    <h1 className="text-gray-600 font-bold text-2xl text-center mb-2">Atencion 24/7</h1>
                    <p className="font-medium text-sm text-gray-500 text-center
                    ">
                        Nuestro personal esta disponible 24/7 para ayudarte en cualquier momento.
                    </p>
                </div>
            </div>
        </div>
    )
}