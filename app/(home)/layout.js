import React from 'react';
import SideBarNav from "./_components/SideBarNav"
import Header from "./_components/Header"

function HomeLayout({children}) {
  return (
    <div>
        <div className='h-full w-64 flex-col fixed inset-y-0 z-50'>
          <SideBarNav />
        </div>
        <Header />
        {children}
    </div>
  )
}

export default HomeLayout   