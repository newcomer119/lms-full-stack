import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/educator/SideBar'
import Navbar from '../../components/educator/Navbar'
import Footer from '../../components/educator/Footer'
import { Helmet } from 'react-helmet'

const Educator = () => {
    return (
        <div className="text-default min-h-screen bg-white">
            <Helmet>
                <title>Educator Dashboard - GK Classes | Teacher Portal</title>
                <meta name="description" content="Access your educator dashboard at GK Classes. Manage courses, track student progress, create content, and monitor your teaching performance." />
                <meta name="keywords" content="educator dashboard, teacher portal, course management, student progress tracking, GK classes educator" />
                <meta property="og:title" content="Educator Dashboard - GK Classes | Teacher Portal" />
                <meta property="og:description" content="Access your educator dashboard at GK Classes. Manage courses and track student progress." />
                <meta property="og:url" content="https://yourdomain.com/educator" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Navbar />
            <div className='flex'>
                <SideBar />
                <div className='flex-1'>
                    {<Outlet />}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Educator