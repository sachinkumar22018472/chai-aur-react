import React from 'react'
import Footer from './components/Footers/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Headers/Header'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout