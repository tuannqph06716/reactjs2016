import React from 'react';
export default function Navbar() {
    return (
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
            </div></div></div></div>
    )
}