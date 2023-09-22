import React from 'react'
import localFont from "next/font/local";

const titlefont = localFont({
    src: "../../public/gatheraz.otf",
  });

const Nav = () => {
  return (
    <div className='bg-white h-full w-[30rem] shadow-2xl'>
        <nav className='flex justify-center'>
            <h2 className={`${titlefont.className} pt-4 text-9xl`}>DAYTONA</h2>
            <ul></ul>
        </nav>
    </div>
  )
}

export default Nav