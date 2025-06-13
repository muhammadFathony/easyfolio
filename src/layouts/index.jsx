import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Aos from "aos"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once - while scrolling down
          });
    }, [])
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout