import Item from "./item"
const Timeline = ({data}) => {
    return(
        <>
        <div className="timeline">
            {
                data.length > 0 ? data.map((value, key) => (
                    <Item key={key} label={value.label} job={value.job} jobDetail={value.jobDetail} dateRange={value.dateRange} arrDetail={value.list} />
                )) :
                'Empty Timeline'
            }
        </div>
        </>
    )
}
export default Timeline