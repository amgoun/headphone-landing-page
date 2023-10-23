'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon , ShoppingBagIcon, XMarkIcon  } from '@heroicons/react/24/outline'
import {navLinks} from '../constants/index'
import logoHead from '../../public/images/logoHead.svg'

import {useState} from 'react'

const Nav = () => {
  const[ navbar , setNavbar ] =  useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
       <nav className=' flex justify-between items-center max-container'>
       <Link href='/'>
         <Image
           src={logoHead}
           width={200}
           height ={70}
           alt='logo'
         />
       </Link>
       <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item ) =>(
             <li key= {item.label}>
               <Link href={item.href} className=' font-montserrat leading-normal text-lg text-gray-500'>
                  {item.label}
               </Link>
             </li>
          ))} 
       </ul>
       <div className=' max-lg:block mr-6'>
         <ShoppingBagIcon className=' h-7 w-7'/>
       </div>
       <div className=' hidden max-lg:block '>
         <button>
           {navbar ? (
             <XMarkIcon className=' h-7 w-7' onClick={() =>setNavbar(!navbar)}/>
           ): (
             <Bars3Icon className=' h-7 w-7' onClick={() =>setNavbar(!navbar)}/>
           )}  
         </button>
         <ul className={`flex-1 bg-emerald-200 justify-self-center bp-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
          
          {navLinks.map((item ) =>(
              <li key= {item.label}>
                <Link href={item.href} className=' font-montserrat leading-normal text-lg text-gray-500' onClick={()=> setNavbar(!navbar)}>
                    {item.label}
                </Link>
              </li>
            ))} 
         </ul>
       </div>
       </nav> 
    </header>
   
  )
}

export default Nav