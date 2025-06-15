const Item = ({ label, dateRange, job, jobDetail, arrDetail }) => {
    return (
        <>
            {arrDetail.length > 1 ?
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="timeline-left">
                        <h4 className="company">{label}</h4>
                        <span className="period">{dateRange}</span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-right">
                        <h3 className="position">{job}</h3>
                        <p className="description">
                            {jobDetail}
                        </p>
                        {
                            arrDetail.map((value, i) => (
                                <ul key={i}>
                                    <li>{value}</li>
                                </ul>
                            ))
                        }
                        <p></p>
                    </div>
                </div>
                :
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="timeline-left">
                        <h4 className="company">{label}</h4>
                        <span className="period">{dateRange}</span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-right">
                        <h3 className="position">{job}</h3>
                        <p className="description">{jobDetail}</p>
                    </div>
                </div>
            }
        </>
    )
}
export default Item