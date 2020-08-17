import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
             <main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area bg-img" data-bg="https://360boutique.vn/wp-content/uploads/2019/11/Ảnh-bìa-web-16.06.2020-01.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap text-center">
                  <nav aria-label="breadcrumb">
                    <h1 className="breadcrumb-title">About</h1>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item"><a href="blog-left-sidebar.html">About</a></li>
                      <img src="https://360boutique.vn/wp-content/uploads/2019/11/Ảnh-bìa-web-16.06.2020-01.jpg"></img>

                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end */}
        {/* blog main wrapper start */}
        <div className="blog-main-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="blog-widget-wrapper">
                  {/* widget item start */}
                  {/* widget item end */}
                  {/* widget item start */}
                  <div className="blog-widget">
                    <h4 className="blog-widget-title">Search</h4>
                    <form className="widget-search-form">
                      <input placeholder="Search keyword" type="text" className="search-field" />
                      <button type="submit" className="search-btn"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                  {/* widget item end */}
                  {/* widget item start */}
                  {/* widget item end */}
                  {/* widget item start */}
                  <div className="blog-widget">
                    <h4 className="blog-widget-title">Tags</h4>
                    <div className="blog-tag">
                      <a href="blog-details.html">Fashion</a>
                      <a href="blog-details.html">Shoes</a>
                      <a href="blog-details.html">Wallet</a>
                      <a href="blog-details.html">Bags</a>
                      <a href="blog-details.html">Jewelery</a>
                    </div>
                  </div>
                  {/* widget item end */}
                </div>
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="row">
                  <div className="col-12">
                    {/* blog single item start */}
                    <div className="blog-post-item">
                  
                      <div className="blog-content blog-details">
                        <h5 className="blog-title">
                         THỜI TRANG MÙA HÈ CHO SINH VIÊN
                        </h5>
                        <ul className="blog-meta">
                          <li><span>By: </span>tuan</li>
                          <br/>
                          <li><span>On: </span>14.07.2020</li>
                        </ul>
                        <p> Đây có thể là phương khá mới ở Việt Nam trong khoảng hai năm gần đây. Có thể giải
                             thích một cách đơn giản về mô hình tương tác giữa người thiết kế áo thun và
                              các trang web vừa là nhà sản xuất vừa là market như sau: Không phải nhà
                               thiết kế giỏi nào cũng thành công trong kinh doanh và không phải người
                                kinh doanh trong lĩnh vực thiết </p>
                        <blockquote>
                          <p>tầm nhìn xa và họ tìm cách kết hợp với rất rất nhiều người, mỗi người đều có ý tưởng của riêng mình do vậy ý tưởng thiết kế những chiếc áo thun cực kỳ phong phú.Sẽ có những trang web như spreadshirt, teespring,… cung cấp cho bạn đầy đủ những công cụ và kết hợp với sự sáng tạo của bạn để tạo ra những chiếc áo phông theo phong cách của bạn hoặc theo mục tiêu bạn đang nhắm đến. Bạn được tạo tài khoản miễn phí, được sử dụng hình ảnh của riêng mình hay những từ ngữ để trang trí trên khuôn mẫu một chiếc áo thun do bạn chọn. Sự sáng tạo thuộc về bạn, khả năng đẹp, thu hút của chiếc áo cũng thuộc về bạn.</p>
                        </blockquote>
                        <p> Mô hình này thành công chính nhờ vào vô vàn ý tưởng sáng tạo của mỗi người. một nhà sản xuất hay một nhãn hiệu thời trang nổi tiếng đến mấy cũng không thể có được ý tưởng sáng tạo của cả chục thậm chí hàng trăm ngàn người. Những trang web kể trên có lợi chính là ý tưởng thiết kế luôn tươi mới và vô cùng phong phú kèm theo việc họ không cần phải tự tay đi tiếp thị. Chính những nhà thiết kế muốn bán được áo thì họ cần tự tiếp thị cho sản phẩm của mình.
Những nhà thiết kế áo thun thì họ có lợi khi không phải một mình họ lo các khâu còn lại trong quá trình. Đôi khi họ chỉ có ý tưởng còn những việc khác thì dở. Họ là người làm việc nhiều khi theo cảm hứng vì thế mà sẽ không lo nổi một chu kỳ hoàn thiện bao gồm thiết kế, chọn chất liệu, in ấn, và giao hàng. Chính vì cả hai bên cùng có lợi do vậy dễ dàng thấy mô hình này sẽ còn phát triển hơn nữa, tất nhiên không chỉ với mặt hàng áo thun.
                        </p>
                      </div>
                    </div>
                    {/* blog single item start */}
                    {/* comment area start */}
                    <div className="comment-section section-padding">
                      <h5>03 Comment</h5>
                      <ul>
                        <li>
                          <div className="author-avatar">
                          <img src="https://www.gocbao.com/wp-content/uploads/2020/04/hinh-anh-mat-cuoi.jpg" width="20px" alt="" />
                          </div>
                          <div className="comment-body">
                            <span className="reply-btn"><a href="#">Reply</a></span>
                            <h5 className="comment-author">Admin</h5>
                            <div className="comment-post-date">
                              15 Dec, 2019 at 9:30pm
                            </div>
                            <p>rất hay hjhj</p>
                          </div>
                        </li>
                        <li className="comment-children">
                          <div className="author-avatar">
                          <img src="https://www.gocbao.com/wp-content/uploads/2020/04/hinh-anh-mat-cuoi.jpg" width="20px" alt="" />
                          </div>
                          <div className="comment-body">
                            <span className="reply-btn"><a href="#">Reply</a></span>
                            <h5 className="comment-author">Admin</h5>
                            <div className="comment-post-date">
                              20 Nov, 2019 at 9:30pm
                            </div>
                            <p>conga</p>
                          </div>
                        </li>
                        <li>
                          <div className="author-avatar">
                          <img src="https://www.gocbao.com/wp-content/uploads/2020/04/hinh-anh-mat-cuoi.jpg" width="20px" alt="" />
                          </div>
                          <div className="comment-body">
                            <span className="reply-btn"><a href="#">Reply</a></span>
                            <h5 className="comment-author">Admin</h5>
                            <div className="comment-post-date">
                              25 Jan, 2019 at 9:30pm
                            </div>
                            <p>rất hay</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* comment area end */}
                    {/* start blog comment box */}
                    <div className="blog-comment-wrapper">
                      <h5>Leave A Reply</h5>
                      <p>Email address will not be published. Required fields are marked *</p>
                      <form action="#">
                        <div className="comment-post-box">
                          <div className="row">
                            <div className="col-12">
                              <label>Comment</label>
                              <textarea name="commnet" placeholder="Write a comment" defaultValue={""} />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <label>Name</label>
                              <input type="text" className="coment-field" placeholder="Name" />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <label>Email</label>
                              <input type="text" className="coment-field" placeholder="Email" />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <label>Website</label>
                              <input type="text" className="coment-field" placeholder="Website" />
                            </div>
                            <div className="col-12">
                              <div className="coment-btn">
                                <input className="btn" type="submit" name="submit" defaultValue="POST COMMENT" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* start blog comment box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog main wrapper end */}
      </main>
        </div>
    )
}

About.propTypes = {

}

export default About
