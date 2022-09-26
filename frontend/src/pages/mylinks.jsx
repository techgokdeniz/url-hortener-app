import React from 'react'
import Header from '../components/header'
import HeaderTab from '../components/headertab'
import MyLinksTab from '../components/mylinks'

function MyLinks() {
  return (
    <div className='w-screen h-full md:h-screen  overflow-x-hidden bg-[#111827]'>
        <HeaderTab />
        <Header/>
        <MyLinksTab />
    </div>
  )
}

export default MyLinks