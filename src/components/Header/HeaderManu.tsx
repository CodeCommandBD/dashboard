'use client'
import { usePathname } from 'next/navigation'
import { headerData } from '../../../Constant/constant'
import Link from 'next/link'

const HeaderManu = () => {
    const pathname = usePathname()
    return (
        <div className='hidden md:flex items-center justify-center gap-x-7 text-sm capitalize font-semibold text-lightColor w-1/3'>
            {
                headerData?.map((navitem) => (
                    <Link className={`hover:text-shop_light_green relative group transition-all duration-300 ${pathname === navitem?.href && "text-shop_light_green"}`} key={navitem?.title} href={navitem?.href}>{navitem?.title}
                        <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:left-0 transition-all duration-300 ${pathname === navitem?.href && "w-1/2 left-0"}`}>
                        </span>
                        <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:right-0 transition-all duration-300 ${pathname === navitem?.href && "w-1/2 right-0"}`}>
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default HeaderManu