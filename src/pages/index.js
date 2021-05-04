import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"



import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousels"
import "../components/carousels.css"
import Footer from "../components/footer"
import "../components/footer.css"


{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  */}




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h5>Welcome to our website</h5>
    <p>Select the place you may want to visit</p>
    <p>Click the image menu below</p>

    <Carousel />
    <Footer />
  </Layout>
  
)

export default IndexPage
