import Link from 'next/link'
import React from 'react'
import { productType } from '../../../Constant/constant'

interface Props {
    selectedTab: string;
    onSelectedTab: (tab: string) => void
}

const HomeTabBar = ({ selectedTab, onSelectedTab }: Props) => {
    console.log(selectedTab);
    
    return (
        <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex flex-wrap items-center gap-3 text-sm font-semibold'>
                {productType?.map((product) => (
                    <button
                        onClick={()=> onSelectedTab(product?.title)}
                        className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white transition-all duration-300 ${selectedTab === product?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20"}`}
                        key={product?.title}>{product?.title}</button>
                ))}
            </div>
            <Link className='border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white transition-all duration-300' href={'/shop'}>See All</Link>
        </div>
    )
}

export default HomeTabBar