// import { useNavigate } from "react-router-dom"
import "../assets/css/Home.css"
import Footer from "./navBars/Footer";
import Header from "./navBars/Header";
import GestionOffres from "./offres/GestionOffres";

export default function Home() {

  return (
    <div>
      <Header/>
      <GestionOffres/>
      <Footer/>
    </div>
  )
}
