'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidemenu from './Sidemenu'

const Mobilemenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <AlignLeft className='hover:text-darkColor text-lightColor md:hidden transition-all duration-300 cursor-pointer'></AlignLeft>
            </button>
            <div className='md:hidden'>
                <Sidemenu 
                    isOpen = {isSidebarOpen}
                    onClose = {()=>setIsSidebarOpen(false)}
                ></Sidemenu>
            </div>
        </>
    )
}

export default Mobilemenu