import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import React from 'react'

interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}


const data: ContactItemData[] = [
    {
        title:'Visit Us',
        subtitle:'New Orlean, USA',
        icon:(
            <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors:'></MapPin>
        )
    },
    {
        title: 'Call Us',
        subtitle: '+1 234 567 890',
        icon: (
            <Phone className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors:' />
        )
    },
    {
        title: 'Email Us',
        subtitle: 'info@example.com',
        icon: (
            <Mail className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors:' />
        )
    },
    {
        title: 'Our Website',
        subtitle: 'www.example.com',
        icon: (
            <Globe className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors:' />
        )
    }
]

const FooterTop = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b '>
            {
                data?.map((item)=>(
                    <div key={item.title} className='flex items-center gap-3.5 group hover:bg-gray-50 p-4 transition-colors duration-300'>
                        {item.icon}
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-semibold text-gray-900 group-hover:text-black transition-all duration-300'>{item.title}</h2>
                            <p className='text-gray-600 text-sm group-hover:text-gray-900 transition-all duration-300'>{item.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterTop