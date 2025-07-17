import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode={'modal'}>
      <button className='text-sm font-semibold hover:text-darkColor text-lightColor cursor-pointer transition-all duration-300'>Login</button>
    </SignInButton>
  )
}

export default Signin