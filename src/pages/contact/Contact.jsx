import React from 'react'
import './Contact.css'
import Iframe from 'react-iframe'
const Contact = () => {
  return (
      <div className='container'>
        <div className='row justify-content-center'>
            <div className="col-md-12">
                <div className='wrapper'>
                    <div className="row no-gutters mb-5">
                       <div className="col-md-7">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                               <h3 className="mb-4">Bize Ulaşın</h3>
                               <div id="form-message-warning" className="mb-4"></div> 
                               <div id="form-message-success" className="mb-4">
							   Mesajınız gönderildi, teşekkürler!
                              </div>
                              <form id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" htmlFor="name">Ad Soyad</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" htmlFor="email">Email Adresi</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="subject">Konu</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="#">Mesaj</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Mesaj Gönder" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
                            </div>
                       </div>
                       <div className="col-md-5 d-flex align-items-stretch">
                          <div>
							
							<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.558315071199!2d27.034161674828685!3d38.474757114597935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd985c570e4bd%3A0x3e2bbeb0eb766516!2sTPR%20Bilgi%20Teknolojileri%20A.%C5%9E.!5e0!3m2!1str!2str!4v1689040689184!5m2!1str!2str"
								width="500px"
								height="593px"
								id=""
								className=""
								display="block"
								position="relative"/>
						  
						 </div>
                      </div>
                    </div>
                </div>
			
            </div>
        </div>
      </div>

  )
}

export default Contact