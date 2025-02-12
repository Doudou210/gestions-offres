import { useNavigate } from "react-router-dom"
import "../assets/css/Home.css"
import Footer from "./navBars/Footer";
import Header from "./navBars/Header";

export default function Home() {
  const navigate= useNavigate();

  const handleNav= ()=>{
    navigate('/auth_user')
  }

  return (
    <div>
      <Header/>
      <h1 className="d-flex align-items-center justify-content-center vh-100">Home Page</h1>
      <button type="button" onClick={handleNav}>Auth User</button>
      <Footer/>
    </div>
  )
}
