
import { Outlet } from "react-router-dom"

import Header from "../components/Header/Header"

import Footer from "../../src/components/Footer/Footer"

import SlideShowContext from "../../../Contexts/SlideShowContext"
import { useState } from "react"

function Layout(){
const [open,setOpen] = useState(false)
return(
    <SlideShowContext.Provider value={{open,setOpen}}>
<Header/>
<Outlet/>
<Footer/>
    </SlideShowContext.Provider>
)
}
export default Layout