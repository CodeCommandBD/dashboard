import React from 'react'
import { Product } from '../../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { FlameIcon, StarIcon } from 'lucide-react'
import { Title } from '../Text/Text'
import Price from '../PriceView/Price'
import AddToCart from '../PriceView/AddToCart'
import ProductSideMenu from '../ProductSideMenu/ProductSideMenu'




const ProductCard = ({ products }: { products: Product }) => {


    return (
        <div className='text-sm border-[1px] border-purple-900/20 rounded-md bg-white group '>
            <div className='relative group overflow-hidden bg-shop_light_bg rounded-md'>
                {products?.images &&(
                    <Link href={`/product/${products?.slug?.current}`}>
                    <Image
                      src={urlFor(products.images[0]).url()}
                      alt="productImage"
                      width={500}
                      height={500}
                      priority
                      className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
                      ${products?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
                    />
                  </Link>
                )}
                <ProductSideMenu product={products}></ProductSideMenu>
                {/* product status  */}
                {products?.status === 'sale' && <p className='absolute top-2 left-2 z-10  bg-transparent border border-purple-900/80 px-3  rounded-full text-xs group-hover:border-purple-900/30 transition-all duration-300 group-hover:text-shop_light_green' >Sale!</p>}

                {/* product status two */}
                {
                    products?.status === 'hot' &&
                    <Link href={'/deal'} className='absolute top-2 left-2 border border-shop_orange/80 group-hover:border-shop_orange transition-all duration-300 p-1 rounded-full'>
                        <FlameIcon
                            className='text-shop_orange/50 group-hover:text-shop_orange transition-all duration-300'
                            size={18}
                            fill='#fb6c08'
                        ></FlameIcon>
                    </Link>
                }
                {/* product status three */}

                {products?.status === 'new' && <p className='absolute top-2 left-2 z-10  bg-transparent border border-purple-900/80 px-3  rounded-full text-xs group-hover:border-purple-900/30 transition-all duration-300 group-hover:text-shop_light_green' >New</p>}

            </div>
            <div className='p-3 flex flex-col gap-2'>
                {
                    products?.categories && (
                        <p className='uppercase text-xs line-clamp-1 text-gray-500'>{products.categories.map((cat) => cat).join(", ")}</p>
                    )
                }
                <Title className='text-sm line-clamp-1 '>{products?.name}</Title>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center'>
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                size={15}
                                key={index}
                                className={index < 4 ? "text-shop_light_green fill-shop_light_green" : "text-gray-400"}
                            ></StarIcon>
                        ))}
                    </div>
                    <p className='text-gray-400 font-xs tracking-wide'>5 Reviews</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='font-medium'>In Stock</p>
                    <p className={` ${products?.stock === 0 ? 'text-red-500' : 'text-shop_light_green font-semibold'}`}>{(products?.stock as number) > 0 ? products?.stock : "unavailable"}</p>
                </div>
                <Price
                    price={products?.price}
                    discount={products?.discount}
                    className='text-sm'
                ></Price>
                <AddToCart product={products} className='rounded-full' ></AddToCart>
            </div>
        </div>
    )
}

export default ProductCard