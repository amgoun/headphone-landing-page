import {  ArrowDownRightIcon, ArrowRightIcon  } from '@heroicons/react/24/solid'

const Button = () => {
  return (
    <button className=' flex py-4 px-7 bg-primary font-montserrat leading-none text-lg rounded-full gap-4 justify-center items-center text-white'>
        shop now
        <ArrowRightIcon className=' h-5 w-5'/>
    </button>
    
  )
}

export default Button