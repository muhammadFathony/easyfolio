import Resume from "../../components/resume"

const ResumeSection = ({data}) => {
    return (
        <>
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
                <Resume data={data} />
            </section>
        </>
    )
}
export default ResumeSection