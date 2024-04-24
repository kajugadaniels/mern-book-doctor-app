import React from 'react'
import { Header, Footer } from '../components/'
import Routers from '../routes/Routes'

const Layout = () => {
    return (
        <>
            <Header/>

            <main>
                <Routers />
            </main>

            <Footer />
        </>
    )
}

export default Layout