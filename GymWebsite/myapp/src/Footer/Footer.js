import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget company-intro-widget">
                  {/* <a href="index.html" className="site-logo"><img src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png" alt="logo" /></a> */}
                  <p>Owner:-Shivam R Kale</p>
                  <ul className="company-footer-contact-list">
                    <li><i className="fas fa-phone"></i>9373511250</li>
                    <li><i className="fas fa-clock"></i>Mon - Sat 6.00am - 11.00am and 5.00pm-10.00pm</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">Our Contacts</h5>
                  <ul className="courses-link-list">
                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Vinkar Vasahat Manewada</a></li>
                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>shivam@fitnfine.com</a></li>
                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>9373511250</a></li>
                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>unpredictable_aspect_1123</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget latest-news-widget">
                  <h5 className="widget-title">Explore</h5>
                  <ul className="small-post-list">
                    <li>
                      <div className="small-post-item">
                        <h6 className="small-post-title"><Link to={"/"}>Home</Link></h6>
                        <h6 className="small-post-title"><Link to={"/about"}>About us</Link></h6>
                        <h6 className="small-post-title"><Link to={"/login"}>Login</Link></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget newsletter-widget">
                  <h5 className="widget-title">Newsletter</h5>
                  <div className="footer-newsletter">
                    <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                    <form className="news-letter-form">
                      <input type="email"  name="news-email" id="news-email" placeholder="Your email address" />
                      <p><a className='mt-1 btn btn-primary' href="mailto:shivamkale1123@gmail.com">Send</a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>  
      </footer>

  <div className="text-center pt-2 pb-2 text-white">
    Copyright ©2023 All rights reserved | Made with ❤️  by Shivam
  </div>
  </>
  )
}
