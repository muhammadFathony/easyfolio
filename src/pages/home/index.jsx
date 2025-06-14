import PhotoProfile from "../../assets/img/profile-square-2.webp"
import signature from "../../assets/img/signature-1.webp"
import HeroSection from "../../features/hero"
import AboutSection from "../../features/about"
import SkillsSection from "../../features/skills"
const personalData = [
    {
        label: 'Name',
        value: 'Eliot Johnson'
    },
    {
        label: 'Phone',
        value: '+123 456 7890'
    },
    {
        label: 'Age',
        value: '26 Years'
    },
    {
        label: 'Email',
        value: 'email@example.com'
    },
    {
        label: 'Occupation',
        value: 'Lorem Engineer'
    },
    {
        label: 'Nationality',
        value: 'Ipsum'
    }
]
const skillData = [
    {
        label: 'HTML',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 90
    },
    {
        label: 'CSS',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 90
    },
    {
        label: 'JavaScript',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 80
    },
    {
        label: 'Photoshop',
        value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        percent: 70
    }
]
const timelineData = [
    {
        label: 'Work Experience',
        description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        detail: [
            {
                label: 'Etiam Industries',
                dateRange: 'Jun, 2023 - Current',
                job: 'Project Lead',
                jobDetail: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila',
                list: []
            },
            {
                label: 'Nullam Corp',
                dateRange: '2019 - 2023',
                job: 'Senior graphic design specialist',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus',
                list: [
                    'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
                    'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
                    'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
                    'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
                ]
            },
            {
                label: 'Etiam Stepping Stone Ltd.',
                dateRange: '2015-2019',
                job: 'Graphic design specialist',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            }
        ]
    },
    {
        label: 'My Education',
        description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        detail: [
            {
                label: 'Vestibulum University',
                dateRange: '2017-2019',
                job: 'Diploma in Consequat',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            },
            {
                label: 'Nullam Corp',
                dateRange: '2019 - 2023',
                job: 'Master of Fine Arts & Graphic Design',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            },
            {
                label: 'Vestibulum University',
                dateRange: '2015-2019',
                job: 'Bachelor of Fine Arts & Graphic Design',
                jobDetail: 'Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.',
                list: []
            }
        ]
    }

]
const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection personalData={personalData} PhotoProfile={PhotoProfile} signature={signature} />
            <SkillsSection data={skillData} />
            <section id="resume" className="resume section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Resume</h2>
                    <div className="title-shape">
                        <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-12">
                            <div className="resume-wrapper">
                                <div className="resume-block" data-aos="fade-up">
                                    <h2>Work Experience</h2>
                                    <p className="lead">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>

                                    <div className="timeline">
                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                            <div className="timeline-left">
                                                <h4 className="company">Etiam Industries</h4>
                                                <span className="period">Jun, 2023 - Current</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Project Lead</h3>
                                                <p className="description">Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                                            </div>
                                        </div>

                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                                            <div className="timeline-left">
                                                <h4 className="company">Nullam Corp</h4>
                                                <span className="period">2019 - 2023</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Senior graphic design specialist</h3>
                                                <p className="description">
                                                    Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
                                                </p>
                                                <ul>
                                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                                </ul>
                                                <p></p>
                                            </div>
                                        </div>

                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                                            <div className="timeline-left">
                                                <h4 className="company">Stepping Stone Ltd.</h4>
                                                <span className="period">2015-2019</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Graphic design specialist</h3>
                                                <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
                                    <h2>My Education</h2>
                                    <p className="lead">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing.</p>

                                    <div className="timeline">
                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                            <div className="timeline-left">
                                                <h4 className="company">Vestibulum University</h4>
                                                <span className="period">2017-2019</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Diploma in Consequat</h3>
                                                <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                                            </div>
                                        </div>

                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                                            <div className="timeline-left">
                                                <h4 className="company">Nullam Corp</h4>
                                                <span className="period">2019 - 2023</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Master of Fine Arts &amp; Graphic Design</h3>
                                                <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                                            </div>
                                        </div>

                                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                                            <div className="timeline-left">
                                                <h4 className="company">Vestibulum University</h4>
                                                <span className="period">2015-2019</span>
                                            </div>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-right">
                                                <h3 className="position">Bachelor of Fine Arts &amp; Graphic Design</h3>
                                                <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <div className="title-shape">
                        <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
                            <ul className="portfolio-filters isotope-filters">
                                <li data-filter="*" className="filter-active">All Work</li>
                                <li data-filter=".filter-web">Web Design</li>
                                <li data-filter=".filter-graphics">Graphics</li>
                                <li data-filter=".filter-motion">Motion</li>
                                <li data-filter=".filter-brand">Branding</li>
                            </ul>
                        </div>

                        <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-1.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-1.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Web Design</span>
                                        <h3>Modern Dashboard Interface</h3>
                                        <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-10.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-10.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Graphics</span>
                                        <h3>Creative Brand Identity</h3>
                                        <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-7.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-7.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Motion</span>
                                        <h3>Product Animation Reel</h3>
                                        <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-4.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-4.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Branding</span>
                                        <h3>Luxury Brand Package</h3>
                                        <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-2.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-2.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Web Design</span>
                                        <h3>E-commerce Platform</h3>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img src="assets/img/portfolio/portfolio-11.webp" className="img-fluid" alt="" loading="lazy" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <a href="assets/img/portfolio/portfolio-11.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                                                <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Graphics</span>
                                        <h3>Digital Art Collection</h3>
                                        <p>Cras mattis consectetur purus sit amet fermentum.</p>
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
export default Home