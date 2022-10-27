import * as React from "react"
import type { HeadFC } from "gatsby"
import Footer from '../components/footer/Footer';
import NavBar from "../components/navbar/NavBar"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <main>
      <NavBar activePage="home"/>
      {/* contents */}
      <div className="index-container">
        <div className="iframe-container">
          <iframe src="https://player.vimeo.com/video/762467309?h=e49b34d8ab" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>jop jop</title>
