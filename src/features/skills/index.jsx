import Skills from "../../components/skills"
const SkillsSection = ({data}) => {
    return (
        <>
            <section id="skills" className="skills section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                   <Skills data={data} />
                </div>
            </section>
        </>
    )
}
export default SkillsSection