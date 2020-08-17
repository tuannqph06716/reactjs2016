import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer className="footer-wrapper">
        {/* footer main area start */}
        <div className="footer-widget-area section-padding">
          <div className="container">
            <div className="row mtn-40">
              {/* footer widget item start */}
              <div className="col-xl-5 col-lg-3 col-md-6">
                <div className="widget-item mt-40">
                  <h5 className="widget-title">My Account</h5>
                  <div className="widget-body">
                    <ul className="location-wrap">
                      <li><i className="ion-ios-location-outline" />184 Main Rd E, St Albans VIC 3021, Australia</li>
                      <li><i className="ion-ios-email-outline" />Mail Us: <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></li>
                      <li><i className="ion-ios-telephone-outline" />Phone: <a href="%2b0025425456554">+ 00 254 254565</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* footer widget item end */}
              {/* footer widget item start */}
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget-item mt-40">
                  <h5 className="widget-title">Categories</h5>
                  <div className="widget-body">
                    <ul className="useful-link">
                      <li><a href="#">Ecommerce</a></li>
                      <li><a href="#">Shopify</a></li>
                      <li><a href="#">Prestashop</a></li>
                      <li><a href="#">Opencart</a></li>
                      <li><a href="#">Magento</a></li>
                      <li><a href="#">Jigoshop</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* footer widget item end */}
              {/* footer widget item start */}
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget-item mt-40">
                  <h5 className="widget-title">Information</h5>
                  <div className="widget-body">
                    <ul className="useful-link">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Returns &amp; Exchanges</a></li>
                      <li><a href="#">Shipping &amp; Delivery</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* footer widget item end */}
              {/* footer widget item start */}
              <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6">
                <div className="widget-item mt-40">
                  <h5 className="widget-title">Quick Links</h5>
                  <div className="widget-body">
                    <ul className="useful-link">
                      <li><a href="#">Store Location</a></li>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Orders Tracking</a></li>
                      <li><a href="#">Size Guide</a></li>
                      <li><a href="#">Shopping Rates</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* footer widget item end */}
            </div>
          </div>
        </div>
        {/* footer main area end */}
        {/* footer bottom area start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-2 order-md-1">
                <div className="copyright-text text-center text-md-left">
                  <p>Copyright 2019 <a href="index.html">Juan</a>. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="footer-social-link text-center text-md-right">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom area end */}
      </footer>
    )
}

Footer.propTypes = {

}

export default Footer
