import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { useForm } from "react-hook-form";
const Home = props => {
  const last=parseInt(props.lastBills)+1;
  console.log(last);
  const[cart, setCart]=useState([]);
  const PAGE_PRODUCTS="products";
  const PAGE_CART="cart";
  const PAGE_CHECKOUT="checkout";
  const PAGE_THANK="thankiu";

  const MOI_NHAT="moinhat";
  const CU_NHAT="cunhat";
  const SORT="ten";
  var tuan11="1111";
  const REVERSE="tendaonguoc";
  const PRICE="giathapnhat";
  const PRICE_CAO="giacao";
  const [newData, setNewData]=useState([]);
  const[page, setPage]=useState(PAGE_PRODUCTS);
  const[filter, setFilter]=useState(PAGE_PRODUCTS);
  const data=props.products;
  const[fil, setFil]=useState([]);
  const {register, handleSubmit, errors}=useForm();
    const Them = (data) => {
      cart.forEach(ca=>{
        Axios.post("https://5f32d2fbec83300016137b35.mockapi.io/bill_details",ca);
      })
      Axios.post("https://5f32d2fbec83300016137b35.mockapi.io/bills",data);
    }

const pageNumber=[];
    for(let i=1;i<Math.ceil(props.totalPost/ props.postPerPage);i++){
      pageNumber.push(i);  
    }
const navigateTo=(nextpage)=>{
  setPage(nextpage);

}
const setQuality=(id, amount)=>{
  const newCart=[...cart];
  newCart.find((item)=>item.name===id.name).count=amount;
  setCart(newCart);
}
  const addToCart=(id)=>{
    let newCart=[...cart];
    let iTempCart=newCart.find(
      (item)=>id.name===item.name
    );
    if(iTempCart){
      iTempCart.count++;
      iTempCart={
        ...id,
        id_bills:last
            }
    }
    else{
      iTempCart={
        ...id,
        count:1,
        id_bills:last
            }
      newCart.push(iTempCart);
    }
    setCart(newCart);
  }
  const setProducts=(filter)=>{
    if(filter==SORT){
      console.log(filter);
      const tuan12= data.sort((a,b)=>{
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if(nameA<nameB){
          return -1;
        }
        if(nameA>nameB){
          return 1;
        }
        return 0;
      })
      setNewData(tuan12);
    }
    else if(filter==REVERSE){
      console.log(filter);
      const tuan12= data.sort((a,b)=>{
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA>nameB){
          return -1;
        }
        if(nameA<nameB){
          return 1;
        }
        return 0;
      })
      setNewData([]);
      setNewData(tuan12);

    }
    else if(filter==PRICE){
      const tuan12=data.sort((a,b)=>{
        return a.sale_price-b.sale_price;
      })
      setNewData([]);
      setNewData(tuan12);
    }
    else if(filter==PRICE_CAO){
      const tuan12=data.reverse((a,b)=>{
        return a.sale_price-b.sale_price;
      })

      setNewData(tuan12);

    }
    else if(filter==MOI_NHAT){
      const tuan12=data.reverse((a,b)=>{
        return a.id-b.id;
      })
      setNewData(tuan12);

    }
    else if(filter==CU_NHAT){
      const tuan12=data.sort((a,b)=>{
        return a.id-b.id;
      })
      setNewData(tuan12);

    }
    else if(filter==PAGE_PRODUCTS){
      const tuan12=data;
      setNewData(tuan12);

    }
    setNewData([]);
  }
  console.log(data);
  const reMove=(id)=>{
    setCart(
      cart.filter(pro=>{
        return pro !== id;
      })
    )
  }
  const tuan111=()=>{
    window.location = "/";
  }
  const totalCart=()=>{
     return cart.reduce((sum,{sale_price,count})=>sum+parseInt(sale_price)*parseInt(count),0)
  }
  const renderTks=()=>{
    return(
      <div>
      <div>Chúc mừng bạn đã đặt hàng thành công</div>
      <button onClick={()=>tuan111()}>Quay lại đặt hàng</button>
      </div>
    )
  }
  const renderCheckout=()=>{
    return(
      <form onSubmit={handleSubmit(Them)}>

      <div className="checkout-page-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          {/* Checkout Billing Details */}
          <div className="col-lg-6">
            <div className="checkout-billing-details-wrap">
              <h4 className="checkout-title">Billing Details</h4>
              <div className="billing-form-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input-item">
                        <label htmlFor=""f_name className="required">Name</label>
                        <input id="name" type="text" name="name" placeholder="Nhập tên " className="form-control"  ref={register({required:true, minLength:4,maxLength:10})} />
                {errors.name && errors.name.type=== "required" && (<div style={{color: 'red'}}>tên không được để trống </div>)}
                {errors.name && errors.name.type==="minLength" && (<div style={{color: 'red'}} >tên ít nhất 4 ký tự </div>)}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-item">
                        <label htmlFor="l_name" className="required">Phone</label>
                        <input type="text" name="phone" id="sdt" placeholder="SĐT"  ref={register({required:true})} />
                        {errors.phone && errors.phone.type=== "required" && (<div style={{color: 'red'}}>tên không được để trống </div>)}

                      </div>
                    </div>
                  </div>
                  <div className="single-input-item">
                    <label className="required">Address</label>
                    <input id="address" type="text" name="address" placeholder="Nhập dia chi " className="form-control"  ref={register({required:true, minLength:4,maxLength:10})} />
                {errors.address && errors.address.type=== "required" && (<div style={{color: 'red'}}>tên không được để trống </div>)}
                {errors.address && errors.address.type==="minLength" && (<div style={{color: 'red'}} >tên ít nhất 4 ký tự </div>)}
                  </div>
              </div>
            </div>
          </div>
          {/* Order Summary Details */}
          <div className="col-lg-6">
            <div className="order-summary-details">
              <h4 className="checkout-title">Your Order Summary</h4>
              <div className="order-summary-content">
                {/* Order Summary Table */}
                <div className="order-summary-table table-responsive text-center">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(m=>{
                        return(
                      <tr>
                        <td><a href="product-details.html">{m.name} <strong> × {m.count}</strong></a>
                        </td>
                        <td>${parseInt(m.count)*parseInt(m.sale_price)}</td>
                      </tr>
                      )})}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Total Amount</td>
                        <td><strong> <input value={totalCart()} name="total" ref={register()} disabled/></strong></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                    <button type="submit" onClick={()=>navigateTo(PAGE_THANK)} className="btn btn-sqr">Place order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
    )
  }
  const renderProducts=()=>(
    <>
    <div className="shop-product-wrap grid-view row mbn-50">
      {/* product list item start */}
    {/* product item list end */}
    {
        data.map(value=>{
            return (
    <div className="col-lg-4 col-sm-6">
      {/* product grid item start */}
      <div className="product-item mb-53">
        <div className="product-thumb">
          <a href="">
            <img src={value.image} alt="" />
          </a>
        </div>
        <div className="product-content">
          <h5 className="product-name">
            <a href={"/details/"+value.id}>{value.name}</a>
          </h5>
          <div className="price-box">
            <span className="price-regular">${value.price}</span>
            <span className="price-old"><del>${value.sale_price}</del></span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
            <button onClick={()=>addToCart(value)}>Add to cart</button>
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
          </div>
        </div>
        
      </div>
        </div>)})}
        <nav><ul className="pagination">
                {pageNumber.map(number=>(
                  <li key={number} className="page-item">
                  <a onClick={()=>props.paginate(number)} className="page-link">{number}</a>
                  </li>
                ))}</ul></nav>
    </div>
    </>

  );
  const renderCart=()=>(
    <>
       <div className="cart-main-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color">
            <div className="row">
              <div className="col-lg-12">
                {/* Cart Table Area */}
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">id_products</th>
                        <th className="pro-title">name</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Quantity</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(m=>{
                        return(          
                    <tr>
                        <td className="pro-thumbnail"><a>{m.id}</a></td>
                        <td className="pro-title"><a href="#">{m.name}</a></td>
                        <td className="pro-price"><span>{m.sale_price}</span></td>
                        <td className="pro-quantity">
                        <input 
                        size="20"
                        value={m.count}
                        onChange={(e)=>setQuality(m,e.target.value)}/>
                        </td>
                        <td className="pro-remove"><button onClick={()=>reMove(m)}><i className="fa fa-trash-o" /></button></td>
                      </tr>
                      )})}
                    </tbody>
                  </table>
                </div>
                {/* Cart Update Option */}
                <div className="cart-update-option d-block d-md-flex justify-content-between">
                  <div className="apply-coupon-wrapper">
                    <form action="#" method="post" className=" d-block d-md-flex">
                      <input type="text" placeholder="Enter Your Coupon Code" required />
                      <button className="btn">Apply Coupon</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 ml-auto">
                {/* Cart Calculation Area */}
                <div className="cart-calculator-wrapper">
                  <div className="cart-calculate-items">
                    <h3>Cart Totals</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody><tr>
                            <td>Sub Total</td>
                        <td>${totalCart()}</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                  <button onClick={()=>navigateTo(PAGE_CHECKOUT)}>CHECKOUT</button>                
                  </div>
              </div>
            </div>
          </div>
        </div></div>

    </>
  );
    return (
        <main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area bg-img" data-bg="assets/img/banner/breadcrumb-banner.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap text-center">
                  <nav aria-label="breadcrumb">
                    <h1 className="breadcrumb-title">SHOP</h1>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><button onClick={()=>navigateTo(PAGE_PRODUCTS)}>Shop</button></li>
                      <li className="breadcrumb-item active" aria-current="page"><button onClick={()=>navigateTo(PAGE_CART)}>Cart[{cart.length}]</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end */}
        {/* page main wrapper start */}
        <div className="shop-main-wrapper section-padding">
          <div className="container">
            <div className="row">
              {/* sidebar area start */}
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="sidebar-wrapper">
                  {/* single sidebar start */}
                  <div className="sidebar-single">
                    <div className="sidebar-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="sidebar-body">
                      <ul className="color-list">
                        {props.loai.map(m=>{
                          return (
                        <li><a href={"categories/"+m.id}>{m.name} <span></span></a></li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  {/* single sidebar end */}
                  {/* single sidebar start */}
                  {/* single sidebar end */}
                  {/* single sidebar start */}
                  <div className="sidebar-single">
                    <div className="sidebar-title">
                      <h3>color</h3>
                    </div>
                    <div className="sidebar-body">
                      <ul className="color-list">
                        <li><a href="#">gold <span>(05)</span></a></li>
                        <li><a href="#">green <span>(12)</span></a></li>
                        <li><a href="#">blue <span>(14)</span></a></li>
                        <li><a href="#">white <span>(20)</span></a></li>
                        <li><a href="#">red <span>(08)</span></a></li>
                      </ul>
                    </div>
                  </div>
                  {/* single sidebar end */}
                  {/* single sidebar start */}
                  <div className="sidebar-single">
                    <div className="sidebar-title">
                      <h3>size</h3>
                    </div>
                    <div className="sidebar-body">
                      <ul className="size-list">
                        <li><a href="#">L <span>(05)</span></a></li>
                        <li><a href="#">M <span>(06)</span></a></li>
                        <li><a href="#">S <span>(02)</span></a></li>
                        <li><a href="#">XL <span>(01)</span></a></li>
                      </ul>
                    </div>
                  </div>
                  {/* single sidebar end */}
                  {/* single sidebar start */}
                  <div className="sidebar-single">
                    <div className="sidebar-banner">
                      <a href="#">
                        <img src="assets/img/banner/banner_left.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  {/* single sidebar end */}
                </div>
              </div>
              {/* sidebar area end */}
              {/* shop main wrapper start */}
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="shop-product-wrapper">
                  {/* shop product top wrap start */}
                  <div className="shop-top-bar">
                    <div className="row">
                      <div className="col-xl-5 col-lg-4 col-md-3 order-2 order-md-1">
                        <div className="top-bar-left">
                          <div className="product-view-mode">
                            <a className="active" href="#" data-target="grid-view"><i className="fa fa-th" /></a>
                            <a href="#" data-target="list-view"><i className="fa fa-list" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-8 col-md-9 order-1 order-md-2">
                        <div className="top-bar-right">
                          <div className="product-short">
                            <p>Sort By : </p>
                            <select onChange={(e)=>setProducts(e.target.value)} className="nice-select" name="sortby">
                              <option value={PAGE_PRODUCTS}>Relevance</option>
                              <option value={SORT}>Name (A - Z)</option>
                              <option value={REVERSE}>Name (Z - A)</option>
                              <option value={PRICE}>Price(low)</option>
                              <option value={PRICE_CAO}>Price(hight)</option>
                              <option value={MOI_NHAT}>Model (A - Z)</option>
                              <option value={CU_NHAT}>Model (Z - A)</option>
                            </select>
                          </div>
                          <div className="product-amount">
                            <p>Showing 1–16 of 21 results</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* shop product top wrap start */}
                  {/* product item list start */}
                  {page==='products' &&  renderProducts()}
                  {page==='cart' &&  renderCart()}
                  {page==='checkout' &&  renderCheckout()}
                  {page==='thankiu' && renderTks()}


                  {/* end pagination area */}
                </div>
              </div>
              {/* shop main wrapper end */}
            </div>
          </div>
        </div>
        {/* page main wrapper end */}
      </main>
    )
}

Home.propTypes = {

}

export default Home
