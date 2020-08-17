import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";

const Topbar = props => {
  const {register, handleSubmit, errors}=useForm();
  const Search=data=>{
    window.location="search/"+data.tim;
  }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="{{asset('/admin')}}" className="nav-link">Users</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="{{asset('/admin/products')}}" className="nav-link">Products</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="{{asset('/admin/bills')}}" className="nav-link">Bills</a>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3" onSubmit={handleSubmit(Search)}>
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" name="tim" type="search" placeholder="Search" aria-label="Search" ref={register} />
            <div className="input-group-append">
              <button className="btn btn-navbar"type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="hidden-xs" />
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/518bFMriYqL._SX425_.jpg" className="img-circle" alt="User Image" />
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="{{asset('log-out')}}" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="{{asset('log-out')}}" className="btn btn-default btn-flat">Sign out</a>
        </ul></nav>
    )
}

Topbar.propTypes = {

}

export default Topbar
