import ContactForm from "../../components/contactForm"
const ContactSection = () => {
    return (
        <>
            <section id="contact" className="contact section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="content" data-aos="fade-up" data-aos-delay="200">
                                <div className="section-category mb-3">Contact</div>
                                <h2 className="display-5 mb-4">Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
                                <p className="lead mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                                <div className="contact-info mt-5">
                                    <div className="info-item d-flex mb-3">
                                        <i className="bi bi-envelope-at me-3"></i>
                                        <span>info@example.com</span>
                                    </div>
                                    <div className="info-item d-flex mb-3">
                                        <i className="bi bi-telephone me-3"></i>
                                        <span>+1 5589 55488 558</span>
                                    </div>
                                    <div className="info-item d-flex mb-4">
                                        <i className="bi bi-geo-alt me-3"></i>
                                        <span>A108 Adam Street, New York, NY 535022</span>
                                    </div>
                                    <a href="#" className="map-link d-inline-flex align-items-center">
                                        Open Map
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection