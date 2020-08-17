import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
import '../../assets/css/admin/backend/plugins/fontawesome-free/css/all.min.css'
import '../../assets/css/admin/backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import '../../assets/css/admin/backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import '../../assets/css/admin/backend/plugins/jqvmap/jqvmap.min.css'
import '../../assets/css/admin/backend/dist/css/adminlte.min.css'
import '../../assets/css/admin/backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import '../../assets/css/admin/backend/plugins/daterangepicker/daterangepicker.css'
import '../../assets/css/admin/backend/plugins/daterangepicker/daterangepicker.css'
import '../../assets/css/admin/backend/plugins/summernote/summernote-bs4.css'
export default ({ children }) => {
    return (
        <div className="admin-page">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

