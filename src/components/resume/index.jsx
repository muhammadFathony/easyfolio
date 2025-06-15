import Item from "./item"
const Resume = ({data}) => {
    console.log(data)
    return (
        <>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-12">
                        <div className="resume-wrapper">
                            {
                                data.length > 0 ? data.map((value, keyResume) => (
                                    <Item 
                                        label={value.label} 
                                        description={value.description} 
                                        key={keyResume} 
                                        detail={value.detail}
                                    />
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