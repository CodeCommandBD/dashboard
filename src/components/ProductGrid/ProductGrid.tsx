'use client'

import { useEffect, useState } from "react"
import HomeTabBar from "./HomeTabBar"
import { productType } from "../../../Constant/constant"
import { client } from "@/sanity/lib/client"
import { AnimatePresence, motion } from "motion/react"
import { Loader2 } from "lucide-react"
import NoProductAvailable from "../NoProduct/NoProduct"
import ProductCard from "../ProductCard/ProductCard"
import { Product } from "../../../sanity.types"




const ProductGrid = () => {
    const [product, setProduct] = useState<Product[]>([])

    const [loading, setLoading] = useState(false)
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '')

    const query = `*[_type == "product" && variant == $variant ] | order(name desc){
                    ...,"categories":categories[]->title}`

    const params = { variant: selectedTab.toLowerCase() }
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await client.fetch(query, params)

                setProduct(res);


            } catch (error) {
                console.error("Product fatching Error: ", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [selectedTab])
    return (
        <div className='py-10'>
            <HomeTabBar selectedTab={selectedTab} onSelectedTab={setSelectedTab} ></HomeTabBar>
            {loading ? (
                <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
                    <div className="space-x-2 flex items-center text-green-600">
                        <Loader2 className="w-5 h-5 animate-spin"></Loader2>
                        <span className="font-semibold ">Product is loading ...</span>
                    </div>
                </div>
            ) : (product && product.length > 0) ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-5 mt-5">
                    {
                        product?.map((products) => (
                            <AnimatePresence key={products._id}>
                                <motion.div layout initial={{opacity:0.2}} animate={{opacity:1}} exit={{opacity:0}}>
                                    <ProductCard products={products} ></ProductCard>
                                </motion.div>
                            </AnimatePresence>
                        ))
                    }
                </div>
            ) : (
                <div className="mt-5">
                    <NoProductAvailable selectedTab={selectedTab} className=""></NoProductAvailable>
                </div>
            )}
        </div>
    )
}

export default ProductGrid