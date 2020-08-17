import React,{useState} from "react"
import Axios from "axios"
const Detailspr=(props)=>{
    const id= props.match.params.key;
    const [data,setData]=useState([]);
    const url="https://5ea1c7f7b9f5ca00166c2226.mockapi.io/conga/sanpham";
   Axios.get(url).then(res=>{
       setData(res.data)
   });
   return (
       
    data.map(value=>{
        if(value.id==id){
            return(

    <main>
    {/* breadcrumb area start */}
    <div className="breadcrumb-area bg-img" data-bg="assets/img/banner/breadcrumb-banner.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap text-center">
              <nav aria-label="breadcrumb">
                <h1 className="breadcrumb-title">shop</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* breadcrumb area end */}
    {/* product details wrapper start */}
    <div className="product-details-wrapper section-padding">
      <div className="container custom-container">

        <div className="row">
          <div className="col-12">
            {/* product details inner end */}
            <div className="product-details-inner">
              <div className="row">
                <div className="col-lg-5">
                  <div className="product-large-slider mb-20">
                    <div className="pro-large-img img-zoom">
                      <img src={value.image} alt="" />
                    </div>
                  </div>
                  <div className="pro-nav slick-row-5">
                    
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product-details-des">
            <h3 className="pro-det-title">{value.name}</h3>
                    <div className="pro-review">
                      <span><a href="#">1 Review(s)</a></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price">{value.sale_price}</span>      <br />

                      <span className="old-price"><del style={{color: 'red', size:'10px'}}>{value.price}</del></span>
                    </div>
            <p>{value.title}</p>
                    <div className="quantity-cart-box d-flex align-items-center mb-20">
                      <div className="quantity">
                        <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                      </div>
                      <a href="cart.html" className="btn btn-default">Add To Cart</a>
                    </div>
                    <div className="availability mb-20">
                      <h5 className="cat-title">Availability:</h5>
                      <span>In Stock</span>
                    </div>
                    <div className="share-icon">
                      <h5 className="cat-title">Share:</h5>
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>
                      <a href="#"><i className="fa fa-pinterest" /></a>
                      <a href="#"><i className="fa fa-google-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product details inner end */}
            {/* product details reviews start */}
            <div className="product-details-reviews section-padding">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-review-info">
                    <ul className="nav review-tab">
                      <li>
                        <a className="active" data-toggle="tab" href="#tab_one">description</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab_two">information</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab_three">reviews</a>
                      </li>
                    </ul>
                    <div className="tab-content reviews-tab">
                      <div className="tab-pane fade show active" id="tab_one">
                        <div className="tab-one">
                            <p>{value.desc}</p>
                            </div>
                      </div>
                      <div className="tab-pane fade" id="tab_two">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>color</td>
                              <td>black, blue, red</td>
                            </tr>
                            <tr>
                              <td>size</td>
                              <td>L, M, S</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade" id="tab_three">
                        <form action="#" className="review-form">
                          <h5>1 review for <span>Chaz Kangeroo Hoodies</span></h5>
                          <div className="total-reviews">
                            <div className="rev-avatar">
                              <img src="assets/img/about/avatar.jpg" alt="" />
                            </div>
                            <div className="review-box">
                              <div className="ratings">
                                <span className="good"><i className="fa fa-star" /></span>
                                <span className="good"><i className="fa fa-star" /></span>
                                <span className="good"><i className="fa fa-star" /></span>
                                <span className="good"><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                              </div>
                              <div className="post-author">
                                <p><span>admin -</span> 30 Nov, 2018</p>
                              </div>
                              <p>Aliquam fringilla euismod risus ac bibendum. Sed sit amet sem varius ante feugiat lacinia. Nunc ipsum nulla, vulputate ut venenatis vitae, malesuada ut mi. Quisque iaculis, dui congue placerat pretium, augue erat accumsan lacus</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col">
                              <label className="col-form-label"><span className="text-danger">*</span> Your Name</label>
                              <input type="text" className="form-control" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col">
                              <label className="col-form-label"><span className="text-danger">*</span> Your Email</label>
                              <input type="email" className="form-control" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col">
                              <label className="col-form-label"><span className="text-danger">*</span> Your Review</label>
                              <textarea className="form-control" required defaultValue={""} />
                              <div className="help-block pt-10"><span className="text-danger">Note:</span> HTML is not translated!</div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col">
                              <label className="col-form-label"><span className="text-danger">*</span> Rating</label>
                              &nbsp;&nbsp;&nbsp; Bad&nbsp;
                              <input type="radio" defaultValue={1} name="rating" />
                              &nbsp;
                              <input type="radio" defaultValue={2} name="rating" />
                              &nbsp;
                              <input type="radio" defaultValue={3} name="rating" />
                              &nbsp;
                              <input type="radio" defaultValue={4} name="rating" />
                              &nbsp;
                              <input type="radio" defaultValue={5} name="rating" defaultChecked />
                              &nbsp;Good
                            </div>
                          </div>
                          <div className="buttons">
                            <button className="sqr-btn" type="submit">Continue</button>
                          </div>
                        </form> {/* end of review-form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            {/* product details reviews end */} 
            
          </div>
        </div>
      </div>
    </div>
    {/* product details wrapper end */}
  </main>
    )}})
   )

}
export default Detailspr