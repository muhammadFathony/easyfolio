import PersonalInfo from "../../components/personal"
const AboutSection = ({ personalData, PhotoProfile, signature }) => {
    return (
        <>
            <section id="about" className="about section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <div className="title-shape">
                        <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
                            <div className="about-image">
                                <img src={PhotoProfile} alt="Profile Image" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="about-content">
                                <span className="subtitle">About Me</span>
                                <h2>UI/UX Designer &amp; Web Developer</h2>
                                <p className="lead mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <p className="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                <PersonalInfo arrInfo={personalData} />
                                <div className="signature mt-4">
                                    <div className="signature-image">
                                        <img src={signature} alt="" className="img-fluid" />
                                    </div>
                                    <div className="signature-info">
                                        <h4>Eliot Johnson</h4>
                                        <p>Adipiscing Elit, Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection