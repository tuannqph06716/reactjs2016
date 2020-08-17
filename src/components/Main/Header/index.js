import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";


const Header = props => {
  const {register, handleSubmit, errors}=useForm();
  const Search=data=>{
    window.location="search/"+data.tim;
  }
    return (
        <header className="header-area">
        {/* main header start */}
        <div className="main-header d-none d-lg-block"style={{marginLeft: 0}}>
          {/* header top start */}
          <div className="header-top theme-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="welcome-message">
                <p>Welcome to Juan online store</p>
              </div>
            </div>
            <div className="col-lg-6 text-right">
            </div>
          </div>
        </div>
      </div>
          {/* header top end */}
          {/* header middle area start */}
          <div className="header-main-area sticky">
            <div className="container">
              <div className="row align-items-center position-relative">
                {/* start logo area */}
                <div className="col-lg-2">
                  <div className="logo">
                    <a href="index.html">
                      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png" width="200px"alt="" />
                    </a>
                  </div>
                </div>
                {/* start logo area */}
                {/* main menu area start */}
                <div className="col-lg-8 position-static">
                  <div className="main-menu-area">
                    <div className="main-menu">
                      {/* main menu navbar start */}
                      <nav className="desktop-menu">
                        <ul>
                          <li className="active"><a href="/">Home <i className="fa fa-angle" /></a>
                          </li>
                          <li className="static"><a href="/about">about <i className="fa fa-angle" /></a>
                          </li>
                          <li><a href="/">shop <i className="fa fa-angle" /></a>
                          </li>
                          <li><a href="blog-left-sidebar.html">Blog <i className="fa fa-angle" /></a>
                          </li>
                          <li><a href="/contact">Contact us</a></li>
                        </ul>
                      </nav>
                      
                      {/* main menu navbar end */}
                    </div>
                  </div>
                </div>
                
                {/* main menu area end */}
                {/* mini cart area start */}
                <div className="col-lg-2">
                  <div className="header-configure-wrapper">
                    <div className="header-configure-area">
                    <form onSubmit={handleSubmit(Search)} style={{position: 'absolute', top: '0px', right: '130px'}}>
                      <input placeholder="search" name="tim" ref={register()} size={10} />
                      <button className="btn btn-navbar"type="submit">
                    <i className="ion-ios-search-strong" style={{position: 'absolute', top: '4px', right: '-20px'}} />
                    </button>
                    </form>
                      <ul className="nav justify-content-end">
                        <li>
                          <a href="#" className="offcanvas-btn">
                            
                          </a>
                        </li>
                        <li className="user-hover">
                          <a href="#">
                            <i className="ion-ios-gear-outline" />
                          </a>
                          <ul className="dropdown-list">
                            <li><a href="login-register.html">login</a></li>
                            <li><a href="login-register.html">register</a></li>
                            <li><a href="my-account.html">my account</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" className="minicart-btn">
                            <i className="ion-bag" />
                            <div className="notification">2</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* mini cart area end */}
              </div>
            </div>
          </div>
          {/* header middle area end */}
        </div>
        {/* main header start */}
        {/* mobile header start */}
        <div className="mobile-header d-lg-none d-md-block sticky">
          {/*mobile header top start */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mobile-main-header">
                  <div className="mobile-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="mobile-menu-toggler">
                    <div className="mini-cart-wrap">
                      <a href="cart.html">
                        <i className="ion-bag" />
                      </a>
                    </div>
                    <div className="mobile-menu-btn">
                      <div className="off-canvas-btn">
                        <i className="ion-navicon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile header top start */}
        </div>
        {/* mobile header end */}
      </header>
    )
}

Header.propTypes = {

}

export default Header
