import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = props => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">TuanSpurs</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="{{asset('/admin')}}" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>USERS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="{{asset('/admin/products')}}" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>PRODUCTS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="{{asset('/admin/cate')}}" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>CATEGORIES</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="{{asset('/admin/bills')}}" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>BILLS</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    )
}
Sidebar.propTypes = {

}

export default Sidebar
