import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    return(
        <main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area bg-img" data-bg="assets/img/banner/breadcrumb-banner.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap text-center">
                  <nav aria-label="breadcrumb">
                    <h1 className="breadcrumb-title">Contact Us</h1>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end */}
        {/* contact wrapper area start */}
        <div className="contact-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-message">
                  <h2 className="contact-title">tell us your project</h2>
                  <form id="contact-form" action="http://whizthemes.com/mail-php/genger/mail.php" method="post" className="contact-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input name="first_name" placeholder="Name *" type="text" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input name="phone" placeholder="Phone *" type="text" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input name="email_address" placeholder="Email *" type="text" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input name="contact_subject" placeholder="Subject *" type="text" />
                      </div>
                      <div className="col-12">
                        <div className="contact2-textarea text-center">
                          <textarea placeholder="Message *" name="message" className="form-control2" required defaultValue={""} />
                        </div>
                        <div className="contact-btn">
                          <button className="btn" type="submit">Send Message</button>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center">
                        <p className="form-messege" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info pt-0">
                  <h2 className="contact-title">contact us</h2>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                    est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
                    formas human.</p>
                  <ul>
                    <li><i className="fa fa-fax" /> Address : No 40 Baria Sreet 133/2 NewYork City</li>
                    <li><i className="fa fa-phone" /> info@yourdomain.com</li>
                    <li><i className="fa fa-envelope-o" /> +88013245657</li>
                  </ul>
                  <div className="working-time">
                    <h3>Working Hours</h3>
                    <p className="pb-0"><span>Monday – Saturday:</span>08AM – 22PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact wrapper area end */}
      </main>
    )
}
export default Contact