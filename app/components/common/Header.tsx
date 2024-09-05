import Image from 'next/image'
import React from 'react'


export const Header = () => {
  return (
    <header className="bg-[#191919] ">
       <p className="text-white text-center text-sm bg-black p-2">
      {" "}
      Subscribe to our Newsletter For New & latest Blogs and Resources{" "}
    </p>
    <div className='p-4 '>
      <Image alt='logo' width={100} height={50} src="/common/Logo.svg"/>
      </div>
   
  </header>
  )
}
