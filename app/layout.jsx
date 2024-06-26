import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find Your Perfect Rental Properties',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{ children }</main>
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout