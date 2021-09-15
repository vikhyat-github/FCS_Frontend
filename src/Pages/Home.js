import React from 'react'
import Header from '../Components/Header'
import Banner from "../Components/Banner"
import "../Styles/Home.css"
function Home() {
    return (
        <div className="Home">
            <Header />
            {/* Banner */}
            <Banner />
        </div>
    )
}

export default Home
