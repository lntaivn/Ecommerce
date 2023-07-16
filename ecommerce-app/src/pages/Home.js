import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { ProductCard } from '../components/ProductCard'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="images/banner1.jpg" className='img-fluid rounded-3'
                 alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Candle Light</h5>
                  <p>From $800.00</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img  src="images/cognacbanner.png" className='img-fluid2 rounded-4 '
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Cognac</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img  src="images/ginbanner1.jpg" className='img-fluid2 rounded-4 '
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>GIN</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
              <div className="small-banner position-relative p-3">
                  <img  src="images/tequilabanner.jpg" className='img-fluid2 rounded-4 '
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Tequila</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
              <div className="small-banner position-relative p-3">
                  <img  src="images/vodkabanner.jpg" className='img-fluid2 rounded-4 '
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Vodka</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="align-items-center gap-15 flex-column">
                  <img src="images/service.png" alt="services"/>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $5</p>          
                </div>
                <div className='align-items-center gap-15 flex-column'>
                  <img src="images/service-02.png" alt="services"/>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                </div>
                <div className='align-items-center gap-15 flex-column'>
                  <img src="images/service-03.png" alt="services" />
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
                <div className='align-items-center gap-15 flex-column'>
                  <img src="images/service-04.png" alt="services" />
                  <h6>Affordable Prices</h6>
                  <p>Get Factory Default Price</p>
                </div>
                <div className='align-items-center gap-15 flex-column'>
                  <img src="images/service-05.png" alt="services" />
                  <h6>Secure Payments</h6>
                  <p>100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  WELLCOME TO WHINE SHOP!!!
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home