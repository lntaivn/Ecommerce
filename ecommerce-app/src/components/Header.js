import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free ship - Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline: <a className='text-white ' href='tel: +84 969086400'>+84 969086400</a>
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
                <Link className='text-white'>WhineShop</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" class="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-4' /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-15 text-white'>
                    <img src="/images/compare2.png" alt="compare" />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-15 text-white'>
                    <img src="/images/heart.png" alt="wishlist" />
                    <p className='mb-0'>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-15 text-white'>
                    <img src="/images/user1.png" alt="user" />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link >
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-15 text-white'>
                    <img src="/images/cart.png" alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$0.00</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex laign-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.jpg' alt='' />
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">ALL Product</Link></li>
                      <li><Link className="dropdown-item text-white" to="">New Product</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15 center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to=''>Store</NavLink>
                    <NavLink to=''>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header