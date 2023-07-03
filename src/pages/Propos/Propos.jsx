import React from "react"
import Layout from "../../components/Layout"
import ImageBanner from "../../components/ImageBanner/ImageBanner"
import Panneau from "../../components/Panneau/Panneau"

import Image from '../../assets/Img_Propos.svg'

import './Propos.css'

function Propos() {
    return (
        <Layout>
            <ImageBanner src={Image}/>
            <Panneau />
        </Layout>
    )
}

export default Propos