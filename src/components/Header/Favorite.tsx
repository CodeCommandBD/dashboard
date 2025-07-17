import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Favorite = () => {
    return (
        <Link href={'/favorite'} className='group relative'>
            <Heart className='w-5 h-5 group-hover:text-shop_light_green transition-all duration-300'></Heart>
            <span className='absolute -top-1 -right-1 bg-shop_dark_green text-white w-3.5 h-3.5 flex items-center justify-center rounded-full text-xs'>0</span>
        </Link>
    )
}

export default Favorite