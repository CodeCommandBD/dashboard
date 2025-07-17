
import React from 'react'
import Container from '../Container/Container'
import Logo from './Logo'
import HeaderManu from './HeaderManu'
import Searchbar from './Searchbar'
import Cart from './Cart'
import Favorite from './Favorite'
import Signin from '../Signin/Signin'
import Mobilemenu from './Mobilemenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'


const Header = async () => {
  const user = await currentUser();
  console.log(user,'user');
  
  return (
    <header className='bg-white py-4 border-b border-b-black/20'>
      <Container className='flex items-center justify-between   '>

        <div className='w-full md:w-1/3 flex items-center gap-x-5 justify-start md:gap-0'>
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
          <ClerkLoaded>
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
              {!user && <Signin></Signin> }
          </ClerkLoaded>
        </div>

      </Container>
    </header>
  )
}

export default Header