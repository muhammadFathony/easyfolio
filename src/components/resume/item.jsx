import Timelines from "../timeline"
const Item = ({label, description}) => {
    return (
        <>
            <div className="resume-block" data-aos="fade-up">
                <h2>{label}</h2>
                <p className="lead">{description}</p>
            </div>
        </>
    )
}
export default Item