'use client'
import React from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '../../../Constant/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from '../SocialMedia/SocialMedia'
import { useOutsideClick } from '../../../Hooks'

interface Props {
  isOpen: boolean,
  onClose: () => void
}

const Sidemenu = ({ isOpen, onClose }: Props) => {

  const pathName = usePathname()
  const Ref = useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div  className={`fixed inset-y-0 h-screen left-0 top-0 z-50 w-full bg-black/50 text-white/50 shadow-xl transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

      <div ref={Ref} className={` h-screen min-w-72 max-w-96 bg-black transition-all duration-300 p-5 flex flex-col gap-6`}>
        <div className='flex items-center justify-between'>
          <Logo className='text-white' spanDesign='group-hover:text-white'></Logo>
          <button
            onClick={onClose}
            className={`hover:text-shop_light_green cursor-pointer transition-all duration-300`}>
            <X className={`text-white `} />
          </button>
        </div>
        <div className='flex flex-col space-y-4 font-semibold tracking-wide '>
          {headerData?.map((navitem) => {
           
            return (
              <Link
                key={navitem?.title}
                href={navitem?.href}
                className={` hover:text-shop_light_green transition-all duration-300 ${pathName === navitem?.href && 'text-shop_light_green'}`}
                onClick={onClose}
              >
                {navitem?.title}
              </Link>
            );
          })}
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  )
}

export default Sidemenu