import React,{useState} from "react";
import Axios from "axios";
const Search=(props)=>{
    const [data,setData]=useState([]);
    const [dataSearch,setDataSearch]=useState([]);

    const [search, setSearch]=useState([]);
   let key=props.match.params.key;
   const cKey=key.toString();
   const url="https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham";
   Axios.get(url).then(res=>{
       setData(res.data)
   }

    );
return ( <main>
    {/* breadcrumb area start */}
    <div className="breadcrumb-area bg-img" data-bg="assets/img/banner/breadcrumb-banner.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap text-center">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">KEY:{key}</a></li>
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
                    <li><a href="#">Mens <span>(10)</span></a></li>
                    <li><a href="#">Womens <span>(05)</span></a></li>
                    <li><a href="#">Sports <span>(15)</span></a></li>
                    <li><a href="#">Fabric <span>(12)</span></a></li>
                    <li><a href="#">Leather <span>(20)</span></a></li>
                  </ul>
                </div>
              </div>
              {/* single sidebar end */}
              {/* single sidebar start */}
              <div className="sidebar-single">
                <div className="sidebar-title">
                  <h3>filter by price</h3>
                </div>
                <div className="sidebar-body">
                  <div className="price-range-wrap">
                    <div className="price-range" data-min={20} data-max={400} />
                    <div className="range-slider">
                      <form action="#">
                        <div className="price-input">
                          <label htmlFor="amount">Price: </label>
                          <input type="text" id="amount" />
                        </div>
                        <button className="filter-btn">filter</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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
                        <select className="nice-select" name="sortby">
                          <option value="trending">Relevance</option>
                          <option value="sales">Name (A - Z)</option>
                          <option value="sales">Name (Z - A)</option>
                          <option value="rating">Price (Low &gt; High)</option>
                          <option value="date">Rating (Lowest)</option>
                          <option value="price-asc">Model (A - Z)</option>
                          <option value="price-asc">Model (Z - A)</option>
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
              <div className="shop-product-wrap grid-view row mbn-50">
                {/* product list item start */}
              {/* product item list end */}
              {data.map(value=>{
             if(value.name.indexOf(key)!=-1){  
                 return(
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
                      <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
                      <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
                    </div>
                  </div>
                </div>
                  </div>)}})}
              </div>
              {/* end pagination area */}
            </div>
          </div>
          {/* shop main wrapper end */}
        </div>
      </div>
    </div>
    {/* page main wrapper end */}
  </main>)
 }
export default Search;