import Portofolio from "../../components/portofolio"
const PortofolioSection = ({data}) => {
    return (
        <>
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
                        <Portofolio data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default PortofolioSection