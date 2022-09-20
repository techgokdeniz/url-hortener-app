import React from 'react'
import Header from '../components/header'
import HeaderTab from '../components/headertab'
import Landing from '../components/landing'


function Home() {
  return (
    <div className='w-screen h-full md:h-screen  overflow-x-hidden bg-[#111827]'>
        <HeaderTab />
        <Header/>
        <Landing />
    </div>
  )
}

export default Home