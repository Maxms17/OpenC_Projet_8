import React from "react"
import Layout from "../../components/Layout"
import ImageBanner from "../../components/ImageBanner/ImageBanner"
import Gallery from "../../components/Gallery/Gallery"

import Image from '../../assets/Img_Accueil.jpg'

import './Home.css'

function Home() {
    return (
        <Layout>
            <ImageBanner src={Image} para={ "Chez vous, partout et ailleurs" }/>
            <Gallery />
        </Layout>
    )
}

export default Home