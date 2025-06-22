const Item = ({img, title, subtitle, description, category}) => {
    return (
        <>
            <div className={`col-lg-6 col-md-6 portfolio-item isotope-item ${category}`}>
                <div className="portfolio-card">
                    <div className="portfolio-image">
                        <img src={img} className="img-fluid" alt="" loading="lazy" />
                        <div className="portfolio-overlay">
                            <div className="portfolio-actions">
                                <a href={img} className="glightbox preview-link" data-gallery={category}><i className="bi bi-eye"></i></a>
                                <a href="#" className="details-link"><i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <span className="category">{title}</span>
                        <h3>{subtitle}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item