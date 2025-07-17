import React from 'react'

import {Title }from '../Text/Text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/Assets'


const Hero = () => {
  return (
    <div  className='bg-shop-light-pink py-16 md:py-0  px-10 lg:px-24 flex rounded-lg items-center justify-between mt-5'>
        {/* content */}
        <div className=''>
            <Title className='mb-5'>
                Grab Upto 50% off on <br /> 
                Selected Gadgets
            </Title>
            <Link href={'/shop'} >
              <span className="font-semibold bg-shop_dark_green/90 text-white px-6 py-2 rounded hover:bg-shop_dark_green transition-colors duration-200 text-sm ">Buy Now</span>
            </Link>
        </div>
        {/* image */}
        <div>
          <Image className='hidden md:inline-flex ' width={300} height={300} src={banner_1} alt='bannerImage'></Image>
        </div>
    </div>
  )
}

export default Hero