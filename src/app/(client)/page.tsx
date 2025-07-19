import Container from '@/components/Container/Container'
import Hero from '@/components/Hero/Hero'
import React from 'react'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import HomeCategories from '@/components/Popular Categories/HomeCategories'
import { getCategories } from '@/sanity/quaries'
import ShopByBrand from '@/components/ShopByBrand/ShopByBrand'
import LatestBlog from '@/components/LatestBlog/LatestBlog'

const Homepage = async () => {
  const categories = await getCategories(6)
  return (
    <div>
      <Container className='bg-shop-light-pink/20'>
        <Hero></Hero>
        <ProductGrid></ProductGrid>
        <HomeCategories categories={categories}></HomeCategories>
        <ShopByBrand></ShopByBrand>
        <LatestBlog></LatestBlog>
      </Container>
    </div>
  )
}

export default Homepage