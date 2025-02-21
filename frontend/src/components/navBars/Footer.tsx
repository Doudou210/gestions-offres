import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className='bg-primary-subtle p-4'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <div>
          <h1>Logo & resS </h1>
          <ul className='d-flex p-4'>
            <li>
              <LinkedIn/>
            </li>
            <li><WhatsApp/></li>
            <li><Instagram/></li>
            <li><Facebook/></li>
          </ul>
        </div>
        <div>
          <h1>Emploi</h1>
          <ul>
            <li>Qui sommes-nous</li>
            <li>Offres d'emploi</li>
            <li>Offres de stage</li>
            <li>Centre d'aide</li>
          </ul>
        </div>
        <div>
          <h1>NewsLetter</h1>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <input type="email" id='email' placeholder='Email' />
            <button type="submit">S'inscrire</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
