import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
    window.location.href = "/";
  };
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'><div></div>
            <div className='col-6'>
              <p className='text-white mb-0'>Livraison gratuite à partir de 100 € et retours gratuits</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Ligne d'assistance :
                <a className='text-white' href='tel:+212 633579759'>
                  +212 633579759
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white' onClick={handleLogoClick}>Modri-Auto</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text"
                  className="form-control py-2"
                  placeholder="Rechercher un produit, une référence ou marque..."
                  aria-label="Rechercher un produit, une référence ou marque..."
                  aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className='col-5 header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='/assets/images/compare.svg' alt='Comparer' />
                  <p className='mb-0'>Comparer <br /> les produits</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='/assets/images/wishlist.svg' alt='wishlist' />
                  <p className='mb-0'>Liste <br /> des favoris</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='/assets/images/user.svg' alt='user' />
                  <p className='mb-0'>Connexion <br /> à mon compte</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='/assets/images/cart.svg' alt='cart' />
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>100 €</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src='/assets/images/menu.svg' alt='menu' />
                      <span className='me-5 d-inline-block'>Categorie</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="catalogue">Catalogue</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header