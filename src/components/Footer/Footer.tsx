import React from 'react'
import Container from '../Container/Container'
import FooterTop from './FooterTop'
import Logo from '../Header/Logo'
import SocialMedia from '../SocialMedia/SocialMedia'
import { SubText, SubTitle } from '../Text/Text'
import { categoriesData, quickLinkData } from '../../../Constant/constant'
import Link from 'next/link'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <div className='bg-white border-t'>
      <Container >
        <FooterTop></FooterTop>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {/* 1st part */}
          <div className='space-y-5'>
            <Logo></Logo>
            <SubText className=''>Discover Curated furniture Collections at Shopcartyt, blending stryle and comfort to elevate .</SubText>
            <SocialMedia
              className='text-darkColor/60'
              iconClassName='border-darkColor/60 hover:border-shop_dark_green hover:text-shop_dark_green'
              tooltipClassName='bg-darkColor text-white'
            ></SocialMedia>
          </div>
          {/* 2nd part */}
          <div className=''>
            <SubTitle className='mb-5'>Quick Links</SubTitle>
            <ul className='space-y-3'>
              {quickLinkData?.map((item) => (
                <li className='' key={item.title}>
                  <Link href={item.href}  className='text-gray-600 font-medium hover:text-shop_btn_dark_green transition-all duration-300'>
                    {item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 3rd part */}
          <div className=''>
            <SubTitle className='mb-5'>Categories</SubTitle>
            <ul className='space-y-3'>
              {categoriesData?.map((item) => (
                <li className='' key={item.title}>
                  <Link href={`/category/${item.href}`}  className='text-gray-600 font-medium hover:text-shop_btn_dark_green transition-all duration-300'>
                    {item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 4th part */}
          <div className='flex flex-col items-start space-y-5'>
              <SubTitle>Newsletter</SubTitle>
              <SubText>Subscribe to our newsletter to receive updates and exclusive offers.</SubText>
              <form  className='flex flex-col items-start gap-3'>
                <input className='py-2 px-4 border rounded-md' type="email" required placeholder='Enter your email'/>
                <Button className='cursor-pointer w-full'>Subscribe</Button>
              </form>
          </div>
        </div>
        {/* bottom part */}
        <div className='mt-3 py-6 border-t text-center text-sm text-gray-600'>
              <div className='flex items-center justify-center gap-1 text-sm'>
                <span>&copy; {new Date().getFullYear()}{' '}</span>
                <Logo className='text-sm'></Logo>
                <span>All rights reserved.</span>
              </div>
          </div>
      </Container>
    </div>
  )
}

export default Footer