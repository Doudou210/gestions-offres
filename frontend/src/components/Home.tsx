// import { useNavigate } from "react-router-dom"
import "../assets/css/Home.css"
import Footer from "./navBars/Footer";
import Header from "./navBars/Header";

export default function Home() {
  // const navigate= useNavigate();

  return (
    <div>
      <Header/>
      <h1 className="d-flex align-items-center justify-content-center vh-100">Home Page</h1>
      <Footer/>
    </div>
  )
}
