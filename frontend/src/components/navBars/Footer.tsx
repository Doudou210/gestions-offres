import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import "../../assets/css/navBar/NavBar.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='containerFooter bg-primary-subtle p-4'>
      <div className='container '>
        <div className='row text-center yexy-md-start'>
          <div className='col-12 col-md-4 text-center text-md-start mb-4 mb-md-0'>
            <h1>AdobStud </h1>
            <ul className='d-flex justify-content-center justify-content-md-start list-unstyled gap-3'>
              <li>
                <LinkedIn fontSize='large'/>
              </li>
              <li>
                <WhatsApp fontSize='large'/>
              </li>
              <li>
                <Instagram fontSize='large'/>
              </li>
              <li>
                <Facebook fontSize='large'/>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-4 text-center text-md-start mb-4 mb-md-0'>
            <h1>Emploi</h1>
            <ul className='list-unstyled gap-3'>
              <li>Qui sommes-nous</li>
              <li>Offres d'emploi</li>
              <li>Offres de stage</li>
              <li>Centre d'aide</li>
            </ul>
          </div>
          <div className='col-12 col-md-4 text-center text-md-start mb-4 mb-md-0'>
            <h1>NewsLetter</h1>
            <p>Une fois par semaine, des histoires, des jobs et des conseils dans votre boite mail.</p>
            <div className='d-flex justify-content-center align-items-center'>
              <input type="email" id='email' placeholder='Email' />
              <button type="submit">S'inscrire</button>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <p>
                Vous pouvez vous désabonner à tout moment. On n'est pas susceptibles, promis. Pour en savoir plus sur notre politique de protection des données,  
                <Link to={"/"}> cliquez-ici.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className='bg-primary p-2 text-center mt-4 text-white'>Developed by DevCode</p>
    </div>
  )
}
