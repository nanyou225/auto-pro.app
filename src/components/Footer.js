import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsFacebook, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img className='' src='/assets/images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>S'inscrire à la newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text"
                  className="form-control py-1"
                  placeholder="Votre adresse mail..."
                  aria-label="Votre adresse mail..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  S'inscrire
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
              <h4 className='text-white mb-4'>
                Commander
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 md-1' to=''>Mon compte</Link>
                <Link className='text-white py-2 md-1' to=''>Modes de livraison</Link>
                <Link className='text-white py-2 md-1' to=''>Retour et remboursement</Link>
                <Link className='text-white py-2 md-1' to=''>A propos de nous</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>
                Nos Equipementiers
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 md-1' to=''>VALEO</Link>
                <Link className='text-white py-2 md-1' to=''>BOSCH</Link>
                <Link className='text-white py-2 md-1' to=''>MONROE</Link>
                <Link className='text-white py-2 md-1' to=''>SKF</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>
                Informations
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 md-1' to=''>Politique de confidentialité</Link>
                <Link className='text-white py-2 md-1' to=''>Politique de livraison</Link>
                <Link className='text-white py-2 md-1' to=''>Politique de remboursment</Link>
                <Link className='text-white py-2 md-1' to=''>Conditions générales</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>
                Contactez-nous
              </h4>
              <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6'>
                  Adresse: Siège social sis à Treichville,<br />Non loin du palais des sports,<br />
                  code postal: 225<br />
                </address>
                <a href='tel:+2126 33579759' className='mt-3 d-block text-white mb-1'>
                  +2126 33579759
                </a>
                <a href='mailto:auto-pro@gmail.com' className='d-block text-white mb-0'>
                  Modri-Auto-pro@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-2'>
                  <a className='icon_linkedin text-white fs-6' href='/linkedin.com'>
                    <BsLinkedin />
                  </a>
                  <a className='icon_github text-white fs-6' href='github.com'>
                    <BsGithub />
                  </a>
                  <a className='icon_youtube text-white fs-6' href='youtube.com'>
                    <BsYoutube />
                  </a>
                  <a className='icon_facebook text-white fs-6' href='facebook'>
                    <BsFacebook />
                  </a>
                  <a className='icon_whatsapp text-white fs-6' href='https://api.whatsapp.com/send?phone=+212633579759&amp;text=Hello"
          target="_blank'>
                    <BsWhatsapp />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>
                Nos Applications
              </h4>
              <div className='footer-link d-flex flex-column'>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Propulsé par les Developpeurs de Modri-Auto
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer