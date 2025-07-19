
import React from 'react'
import Container from '../Container/Container'
import Logo from './Logo'
import HeaderManu from './HeaderManu'
import Searchbar from './Searchbar'
import Cart from './Cart'
import Favorite from './Favorite'
import Signin from '../Signin/Signin'
import Mobilemenu from './Mobilemenu'
import { auth, currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Logs } from 'lucide-react'
import { getMyOrders } from '@/sanity/quaries'


const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth()
  let orders = null;

  if (userId) {
    orders = await getMyOrders(userId)
  }

  return (
    <header className='sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md '>
      <Container className='flex items-center justify-between   '>

        <div className='w-full md:w-1/3 flex items-center gap-x-2 md:gap-x-5 justify-start md:gap-0'>
          {/* mobile menu */}
          <Mobilemenu></Mobilemenu>
          {/* logo */}
          <Logo></Logo>
        </div>
        {/* nav button */}
        <HeaderManu></HeaderManu>
        {/* loging buttons */}
        <div className='flex items-center justify-end gap-x-4 w-auto md:w-1/3'>
          <Searchbar></Searchbar>
          <Cart></Cart>
          <Favorite></Favorite>
          {user && (
            <Link
              href={"/orders"}
              className="group relative hover:text-shop_light_green hoverEffect"
            >
              <Logs />
              <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          )}

          <ClerkLoaded>
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
            {!user && <Signin></Signin>}
          </ClerkLoaded>
        </div>

      </Container>
    </header>
  )
}

export default Header