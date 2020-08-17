import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import Add from '../pages/views/Admin/Add'
import Gallery from '../pages/views/Admin/Gallery'
import Chitiet from '../pages/views/Admin/Chitiet'
import Bills from '../pages/views/Admin/Bills'
import Details from '../pages/views/Admin/Details'
import Search from '../pages/views/Admin/Search'
//Views
import Cart from '../pages/views/Main/Cart'
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'

import Contact from '../pages/views/Main/Contact'

import About from '../pages/views/Main/About'
import Detailspr from '../pages/views/Main/Detailspr'
import history from "../history.js"
import Categories from '../pages/views/Main/Categories';
const Routers = ({bills, products,tongsohangdadat,tongsotien,tongsohang,loading,postPerPage,totalPost,onAdd,dbCart, onRemove, paginate, lastProducts,loai, lastBills }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router history={history}>
            <Switch>
            <Route path="/admin/:path?">
                    <LayoutAdmin>
                        
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} paginate={paginate} postPerPage={postPerPage} totalPost={totalPost} loading={loading}/>
                            </Route>
                            <Route path='/admin/chitiet'>
                                <Chitiet tongsohang={tongsohang} tongsohangdadat={tongsohangdadat} tongsotien={tongsotien}/>
                            </Route>
                            <Route path='/admin/edit/:id'component={Details} products={products} >
                            </Route>
                            <Route path='/admin/add/' onAdd={onAdd}>
                                <Add/>
                            </Route>
                            <Route path='/admin/bills/'>
                                <Bills bills={bills}/>
                            </Route>
                            <Route path='/admin/galery'>
                                <Gallery lastProducts={lastProducts}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} loai={loai} onAdd={onAdd} lastBills={lastBills} paginate={paginate} postPerPage={postPerPage} totalPost={totalPost}/>
                            </Route>
                            <Route path='/search/:key' component={Search} >
                            </Route>
                            <Route path='/details/:key' component={Detailspr} >
                            </Route>
                            <Route path="/categories/:key">
                                <Categories>
                                </Categories>
                            </Route>
                            <Link path="/about/">
                                <About/>
                            </Link>
                            <Link path="/contact/">
                                <Contact/>
                            </Link>
                            <Route path="/shop" exact>
                                <Shop products={products} loai={loai} onAdd={onAdd} lastBills={lastBills} paginate={paginate} postPerPage={postPerPage} totalPost={totalPost}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {
}
export default Routers
