import Item from "./item"
const Resume = ({data}) => {
    return (
        <>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-12">
                        <div className="resume-wrapper">
                            {
                                data.length > 0 ? data.map((value, key) => (
                                    <Item label={value.label} description={value.description} key={key} />
                                )):
                                'Empty Resume'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume