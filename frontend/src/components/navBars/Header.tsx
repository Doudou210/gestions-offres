import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/navBar/NavBar.css"

export default function Header() {
  const navigate = useNavigate();
  // const handleClickHome=()=>{
  //   navigate("/")
  // }
  const handleClickAuth =()=>{
    navigate("/auth_user")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle p-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h3><Link to={"/"}> AdobStud </Link></h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to={"/mes_offres"} className="nav-link" >Offres</Link>
            </li>
            <li className="nav-item">
              <Link to={"/mes_favoris"} className="nav-link"> Mes Favoris</Link>
            </li>
            <hr />
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-primary w-50" type="button" onClick={handleClickAuth}>Se connecter ou s'inscrire</button><br />
            <button className="btn btn-outline-danger w-50" type="button" onClick={handleClickAuth}>Se Déconnecté(e)</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
