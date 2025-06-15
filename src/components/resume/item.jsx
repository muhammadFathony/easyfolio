import Timelines from "../timeline"
const Item = ({label, description, detail}) => {
    return (
        <>
            <div className="resume-block" data-aos="fade-up">
                <h2>{label}</h2>
                <p className="lead">{description}</p>
                <Timelines data={detail} />
            </div>
        </>
    )
}
export default Item