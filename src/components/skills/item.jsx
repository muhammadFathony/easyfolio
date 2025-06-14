const Item = ({label, description, percent,}) => {
    return (
        <>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="skill-box">
                    <h3>{label}</h3>
                    <p>{description}</p>
                    <span className="text-end d-block">{percent}%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item