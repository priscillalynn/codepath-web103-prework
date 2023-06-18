import React from 'react'
import PageHero from '../components/page-hero/PageHero'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <PageHero />
        <Outlet />
    </>
  )
}

export default Home