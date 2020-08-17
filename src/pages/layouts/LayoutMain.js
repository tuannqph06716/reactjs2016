import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
import '../../assets/css/admin/mainCss/img/favicon.ico'
import '../../assets/css/admin/mainCss/css/plugins.css'
import '../../assets/css/admin/mainCss/css/style.css'
import '../../assets/css/admin/mainCss/css/vendor.css'
export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}