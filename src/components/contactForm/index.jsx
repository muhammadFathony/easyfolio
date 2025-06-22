const ContactForm = () => {
    return (
        <>
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
                <div className="card-body p-4 p-lg-5">
                    <form action="forms/contact.php" method="post" className="php-email-form">
                        <div className="row gy-4">
                            <div className="col-12">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                            </div>
                            <div className="col-12 ">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required="" />
                            </div>
                            <div className="col-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                <button type="submit" className="btn btn-submit w-100">Submit Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactForm