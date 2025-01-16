import { useNavigate } from "react-router-dom"
import "../assets/css/Home.css"
export default function Home() {
  const navigate= useNavigate();
  const handleNav= ()=>{
    navigate('/auth_user')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={handleNav}>Auth User</button>
    </div>
  )
}
