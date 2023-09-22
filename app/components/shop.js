'use client'
import React, { useEffect, useRef } from 'react'
import Nav from './nav'
import { showNav } from './shop-anims'

const Shop = () => {
    const navRef = useRef(null)
    useEffect(() => {
        showNav(navRef.current)
    }, [])

  return (
    <main className={`bg-[#A6E22E] h-screen`}>
        <div className='h-full -translate-x-[20%]' ref={navRef}><Nav/></div>
        <section>

        </section>
    </main>
  )
}

export default Shop